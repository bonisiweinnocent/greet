
var greetBtnElement = document.querySelector(".greetBtn")
var nameStringElement = document.querySelector(".nameString")
var emptyAreaElement = document.querySelector(".emptyArea")
var errorsElement = document.querySelector('.errorNotnumber')
var emptyformElement = document.querySelector('.emptyform')
var lanErrorElement = document.querySelector(".lanError")
var countElement = document.querySelector(".count")


var greetInstance = greet();
var regEx = /^[A-Za-z]+$/;

function greetMe() {
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    if (nameStringElement.value === "" && !checkedRadioBtn) {

        emptyformElement.innerHTML = greetInstance.bothError()
    }

    else if (nameStringElement.value === "") {
        emptyformElement.innerHTML = greetInstance.errorsNoName()
    }
    else if (!checkedRadioBtn) {
        lanErrorElement.innerHTML = greetInstance.languageErrors()
    }

    else if (!regEx.test(nameStringElement.value)) {

        emptyformElement.innerHTML = greetInstance.errorSpecial()

    }
    else {
        greetInstance.greetings(checkedRadioBtn.value, nameStringElement.value)
        emptyAreaElement.innerHTML = greetInstance.getMsg()
        greetInstance.store(nameStringElement.value)
        countElement.innerHTML ="Counter : " + greetInstance.getName()
    }

nameStringElement.value= "";




}

greetBtnElement.addEventListener('click', greetMe)



