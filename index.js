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
    const emptyCreds = document.getElementById('empty-credentials')
    
    savedCredEl.textContent = ''
    if (creds.length == 0) {
        emptyCreds.classList.remove('d-none')

        return
    }

    emptyCreds.classList.add('d-none')
    creds.forEach(cred => {
        const parsedCred = JSON.parse(cred[1])
        const li = document.createElement('li')
        const totp = generateTotp(parsedCred.secret)

        const expiredTime = totp.expires
        let secondsLeft = Math.ceil(Math.abs(expiredTime - new Date().getTime()) / 1000) - 1

        const p = document.createElement('p')
        p.style.wordBreak = 'break-all'
        p.innerText = parsedCred.name
        p.setAttribute('class', 'text-dark font-weight-bold text-center text-wrap')

        const row = document.createElement('div')
        row.setAttribute('class', 'row justify-content-center')

        const textSecondsLeft = document.createElement('span')
        textSecondsLeft.style.marginRight= '10px'
        textSecondsLeft.style.paddingTop= '9px'
        // textSecondsLeft.style.width= '44px'
        textSecondsLeft.innerText = secondsLeft
        textSecondsLeft.setAttribute('class', 'badge badge-pill badge-secondary my-2 p-2')
        
        const input = document.createElement('input')
        input.setAttribute('disabled', true)
        input.setAttribute('value', totp.otp)
        input.style.width = '50%'
        input.style.textAlign = 'center'
        input.style.fontSize = '20px'
        input.setAttribute('class', 'form-control')

        const buttonCopy = document.createElement('button')
        buttonCopy.style.width = '15%'
        buttonCopy.style.marginLeft = '10px'
        buttonCopy.innerText = 'Copy'
        buttonCopy.setAttribute('class', 'btn btn-dark')
        buttonCopy.addEventListener('click', async () => {
            await navigator.clipboard.writeText(input.value)
            alert('code copied to clipboard!')
        })

        const buttonDelete = document.createElement('button')
        buttonDelete.style.width = '15%'
        buttonDelete.style.marginLeft = '10px'
        buttonDelete.innerText = 'Delete'
        buttonDelete.setAttribute('class', 'btn btn-danger')
        buttonDelete.setAttribute('data-id', parsedCred.secret)
        buttonDelete.addEventListener('click', async () => {
            if (confirm('Are you sure to delete this credential?')) {
                const dataId = buttonDelete.getAttribute('data-id')
                localStorage.removeItem(`cred_${dataId}`)

                fetchAllCreds()

                alert('credential deleted successfully')
            }
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

        li.setAttribute('class', 'list-group-item')
        li.append(p)
        li.append(row)
        row.append(textSecondsLeft)
        row.append(input)
        row.append(buttonCopy)
        row.append(buttonDelete)
        
        savedCredEl.appendChild(li)
    });
}

fetchAllCreds()