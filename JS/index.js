const submitButton = document.querySelector('#submit')
const resetButton = document.querySelector('#reset')
const form = document.querySelector('form')

const changeColor = (result, object) => {
    if(result){
        object.style.outline = '3px solid rgb(17, 222, 130)'
    }else{
        object.style.outline = '3px solid red'
    }
}

const checkOnlyLetter = (word) => {
    const regex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/
    changeColor(regex.test(word.value), word)
}
const checkEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    changeColor(regex.test(email.value), email)
}
const checkNumberHouse = (numberHouse) => {
    const regex = /^[1-9][0-9]{0,2}$/
    changeColor(regex.test(numberHouse.value), numberHouse)
}
const checkBirth = (birth) => {
    const regex = /^(19\d{2}|200\d|201[0-9])-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    changeColor(regex.test(birth.value), birth)
}
const checkPhoneNumber = (phone) => {
    const regex = /^\d{9}$/;
    changeColor(regex.test(phone.value), phone)
}
const checkCheckBox = (checkBox) => {
    changeColor(checkBox.checked, checkBox)
}
const allInputs = document.querySelectorAll('.input-area input')
const birth = document.querySelector('#birth')
birth.addEventListener('change', () => {
    if(birth.value != ''){
        birth.style.color = 'rgb(21, 21, 21)'
    }else{
        birth.style.color = '#757575'
    }
})
resetButton.addEventListener('click', () => {
    birth.style.color = '#757575'
    allInputs.forEach(input => {
        input.style.outline = '0px solid black'
    })
})

const checkForm = () => {
    const name = document.querySelector('#name')
    const surname = document.querySelector('#surname')
    const email = document.querySelector('#email')
    const country = document.querySelector('#country')
    const city = document.querySelector('#city')
    const street = document.querySelector('#street')
    const houseNumber = document.querySelector('#house-number')
    const birth = document.querySelector('#birth')
    const telephoneNumber = document.querySelector('#telephone-number')
    const checkBox = document.querySelector('#checkbox')
    
    const lettersWords = [name, surname, country, city, street]

    lettersWords.forEach(word => {
        checkOnlyLetter(word)
    })
    checkEmail(email)
    checkNumberHouse(houseNumber)
    checkBirth(birth)
    checkPhoneNumber(telephoneNumber)
    checkCheckBox(checkBox)
    console.log(birth.value);
}

form.addEventListener('submit', e => {
    e.preventDefault()
})
submitButton.addEventListener('click', function(e) {
    checkForm()  
})


const buttons = [resetButton, submitButton]

buttons.forEach(button => {
    button.addEventListener('mousedown', function(e) {
        this.style.transition = '0.05s ease-in-out'
        this.style.transform = 'scale(0.9)'
    })
    button.addEventListener('mouseup', function(e) {
        this.style.transition = '0.1s ease-in-out'
        this.style.transform = 'scale(1.1)'
    })
    button.addEventListener('mouseover', function(e) {
        this.style.transform = 'scale(1.1)'
    })
    button.addEventListener('mouseout', function(e) {
        this.style.transition = '0.1s ease-in-out'
        this.style.transform = 'scale(1)'
    })
})