window.addEventListener('load', () => {
    const emailField = document.getElementById('email-address')
    emailField.value = ''

    const emailPattern = new RegExp(
        /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        'i'
    )

    emailField.addEventListener('keyup', (event) => {
        if (
            !emailPattern.test(event.target.value) &&
            event.target.value !== ''
        ) {
            event.target.classList.add('wrong-email')
            event.target.nextElementSibling.classList.add('error-icon')
            event.target.parentElement.classList.add('error-message')
        } else {
            event.target.classList.remove('wrong-email')
            event.target.nextElementSibling.classList.remove('error-icon')
            event.target.parentElement.classList.remove('error-message')
        }
    })
})
