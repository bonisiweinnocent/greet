
var greetBtnElement = document.querySelector(".greetBtn")
var nameStringElement = document.querySelector(".nameString")
var emptyAreaElement = document.querySelector(".emptyArea")
var emptyformElement = document.querySelector('.emptyform')
var countElement = document.querySelector(".count")
var resetBtnElement = document.querySelector(".resetBtn")

var regEx = /^[A-Za-z]+$/;

var counter1 = 0;

var storage = [];
if (localStorage["param"]) {
    storage = JSON.parse(localStorage.getItem("param"))
}

var greetInstance = greet(storage);


function greetMe() {
    setTimeout(function () {
        emptyformElement.innerHTML = greetInstance.timer()

    }, 5000);
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    if (nameStringElement.value === "" && !checkedRadioBtn) {
        emptyformElement.innerHTML = greetInstance.bothError(nameStringElement.value,checkedRadioBtn)
    }
    else if (!checkedRadioBtn) {
        emptyformElement.innerHTML = greetInstance.languageErrors(checkedRadioBtn)
    }
    else if (nameStringElement.value === "") {
        emptyformElement.innerHTML = greetInstance.errorsNoName(nameStringElement.value)
    }
    

    else if (!regEx.test(nameStringElement.value)) {

        emptyformElement.innerHTML = greetInstance.errorSpecial(!regEx.test(nameStringElement.value))

    }
   
    else {
        greetInstance.greetings(checkedRadioBtn.value, nameStringElement.value)
        emptyformElement.innerHTML = greetInstance.getMsg()
        greetInstance.store(nameStringElement.value)
        countElement.innerHTML = "Counter : " + (greetInstance.storeArray()).length
    }

    nameStringElement.value = "";
    checkedRadioBtn.checked = false;

    // document.querySelector(".languageRadio").checked = false;
    localStorage.setItem('param', JSON.stringify(greetInstance.storeArray()));


}
function reset() {
    setTimeout(function () {
        emptyformElement.innerHTML = greetInstance.timer()

    }, 7000);
    
     if(resetBtnElement){
        emptyformElement.innerHTML = greetInstance.storageError()
    }
    localStorage.clear()
    location.reload()

}
countElement.innerHTML = "Counter : " + (greetInstance.storeArray()).length

resetBtnElement.addEventListener('click', reset)
greetBtnElement.addEventListener('click', greetMe)





