function greet(storage) {
    var msg = "";
    var nameStore = storage || [];
   
    function greetings(message, param) {
        var param1 = param.charAt(0).toUpperCase() + param.slice(1).toLowerCase();
        if (message == "Swahili") {
            msg = 'Jambo, ' + param1;

        } else if
            (message == "French") {
            msg = "Bonjour, " + param1;

        } else if
            (message == "IsiXhosa") {
            msg = "Molo, " + param1;
        }
    }
    function errorSpecial() {
        return "Please type only letters."
    }

    function getMsg() {
        return msg
    }
    function bothError() {
        return "Please type in your name and select a language."
    }


    function errorsNoName() {
        return "Please type in your name below."
    }

    function languageErrors() {
        return "Please select a language."
    }
    function store(names) {
        if (!nameStore.includes(names)) {
            nameStore.push(names)
            return true
        }
    }
    function getName() {
        return nameStore.length
    }
    function timer(){
        return "";
    }
    function storeArray() {
        return nameStore
    }



    return {
        greetings,
        getMsg,
        errorsNoName,
        languageErrors,
        bothError,
        errorSpecial,
        store,
        getName,
        timer,
        storeArray

    }

}