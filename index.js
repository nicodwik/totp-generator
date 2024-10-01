const {TOTP} = require('totp-generator')
const QrScanner = require('qr-scanner')

function generateTotp(secret) {
    const {otp, expires} = TOTP.generate(secret)

    return {otp, expires}
}

document.getElementById('insert-credential').addEventListener('click', async () => {
    const qrCodeInput = document.getElementById('qr-code-input')

    try {
        let qr = await QrScanner.scanImage(qrCodeInput.files[0])
        if (! qr.includes('otpauth://totp/')) {
            alert('invalid 2FA QR Code')
            return
        }

        const urlStructure = qr.replace('otpauth://totp/', '').split('?')
        const credential = Object.fromEntries(new URLSearchParams(urlStructure[1]).entries())
        credential.name = decodeURIComponent(urlStructure[0])

        localStorage.setItem(`cred_${credential.secret}`, JSON.stringify(credential))

        fetchAllCreds()

    } catch (error) {
        alert('invalid 2FA QR Code')
        return
    }
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
        let secondsLeft = Math.ceil(Math.abs(expiredTime - new Date().getTime()) / 1000)
        const period = parsedCred.period

        const p = document.createElement('p')
        p.style.wordBreak = 'break-all'
        p.innerText = parsedCred.name
        p.setAttribute('class', 'text-dark font-weight-bold text-center text-wrap')

        const row = document.createElement('div')
        row.setAttribute('class', 'row justify-content-between px-3')

        const textSecondsLeft = document.createElement('span')
        textSecondsLeft.style.marginRight= '10px'
        textSecondsLeft.style.paddingTop= '9px'
        textSecondsLeft.innerText = secondsLeft
        textSecondsLeft.setAttribute('class', 'badge badge-pill badge-secondary my-2 p-2')

        const progress = document.createElement('div')
        progress.setAttribute('class', 'progress mb-2')
        const childProgress = document.createElement('div')
        childProgress.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated')
        childProgress.setAttribute('role', 'progressbar')
        childProgress.setAttribute('aria-valuenow', secondsLeft)
        childProgress.setAttribute('aria-valuemin', 0)
        childProgress.setAttribute('aria-valuemax', period)
        childProgress.style.width = `${(secondsLeft / period) * 100}%`
        progress.append(childProgress)
        
        const input = document.createElement('input')
        input.setAttribute('disabled', true)
        input.setAttribute('value', totp.otp)
        input.style.width = '60%'
        input.style.textAlign = 'center'
        input.style.fontSize = '20px'
        input.setAttribute('class', 'form-control')

        const buttonCopy = document.createElement('button')
        buttonCopy.style.width = '15%'
        buttonCopy.innerText = '📑'
        buttonCopy.setAttribute('class', 'btn btn-dark')
        buttonCopy.addEventListener('click', async () => {
            await navigator.clipboard.writeText(input.value)
            alert('code copied to clipboard!')
        })

        const buttonDelete = document.createElement('button')
        buttonDelete.style.width = '15%'
        buttonDelete.style.backgroundColor = '#ffbbc2'
        buttonDelete.style.borderColor = '#ffbbc2'
        buttonDelete.innerText = '🗑️'
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
            const currentSecond = secondsLeft--
            childProgress.setAttribute('aria-valuenow', currentSecond)
            childProgress.style.width = `${(currentSecond / period) * 100}%`
            if (secondsLeft <= 0) {
                const totp = generateTotp(parsedCred.secret)
                setTimeout(() => {
                    input.setAttribute('value', totp.otp)
                }, 1000);
                const newExpiredTime = totp.expires

                secondsLeft = Math.ceil(Math.abs(newExpiredTime - new Date().getTime()) / 1000)
            }    
        }, 1000);

        li.setAttribute('class', 'list-group-item')
        li.append(p)
        li.append(progress)
        li.append(row)
        // row.append(textSecondsLeft)
        row.append(input)
        row.append(buttonCopy)
        row.append(buttonDelete)
        
        savedCredEl.appendChild(li)
    });
}

fetchAllCreds()