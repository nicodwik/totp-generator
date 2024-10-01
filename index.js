const {TOTP} = require('totp-generator')
const QrScanner = require('qr-scanner')

function generateTotp(secret) {
    const {otp, expires} = TOTP.generate(secret)

    return {otp, expires}
}

document.getElementById('insert-credential').addEventListener('click', async () => {
    const qrCodeInput = document.getElementById('qr-code-input')

    const qr = await QrScanner.scanImage(qrCodeInput.files[0])
    const urlStructure = qr.replace('otpauth://totp/', '').split('?')
    const credential = Object.fromEntries(new URLSearchParams(urlStructure[1]).entries())
    credential.name = decodeURIComponent(urlStructure[0])

    localStorage.setItem(`cred_${credential.secret}`, JSON.stringify(credential))

    fetchAllCreds()
})

document.getElementById('delete-all-credentials').addEventListener('click', () => {
    if (confirm('Are you sure to delete all credentials?')) {
        localStorage.clear()

        alert('all credentials deleted successfully')
    }

    fetchAllCreds()
})

const fetchAllCreds = () => {
    const creds = Object.entries(localStorage)
    const savedCredEl = document.getElementById('saved-credentials')
    
    savedCredEl.textContent = ''
    creds.forEach(cred => {
        const parsedCred = JSON.parse(cred[1])
        const li = document.createElement('li')
        const totp = generateTotp(parsedCred.secret)

        const expiredTime = totp.expires
        let secondsLeft = Math.ceil(Math.abs(expiredTime - new Date().getTime()) / 1000) - 1

        const p = document.createElement('p')
        p.innerText = parsedCred.name

        const textSecondsLeft = document.createElement('span')
        textSecondsLeft.style.width= '10%'
        textSecondsLeft.style.marginRight= '10px'
        textSecondsLeft.innerText = secondsLeft
        
        const input = document.createElement('input')
        input.setAttribute('disabled', true)
        input.setAttribute('value', totp.otp)
        input.style.width = '30%'
        input.style.height = '30px'
        input.style.textAlign = 'center'
        input.style.fontSize = '20px'

        const buttonCopy = document.createElement('button')
        buttonCopy.style.width = '20%'
        buttonCopy.style.marginLeft = '10px'
        buttonCopy.style.height = '30px'
        buttonCopy.innerText = 'copy'
        buttonCopy.addEventListener('click', async () => {
            await navigator.clipboard.writeText(input.value)
            alert('code copied to clipboard!')
        })

        setInterval(() => {
            textSecondsLeft.innerText = secondsLeft--
            if (secondsLeft <= -1) {
                const totp = generateTotp(parsedCred.secret)
                input.setAttribute('value', totp.otp)
                const newExpiredTime = totp.expires

                secondsLeft = Math.ceil(Math.abs(newExpiredTime - new Date().getTime()) / 1000) - 1
            }    
        }, 1000);

        li.append(p)
        li.append(textSecondsLeft)
        li.append(input)
        li.append(buttonCopy)
        
        savedCredEl.appendChild(li)
    });
}

fetchAllCreds()