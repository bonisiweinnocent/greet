describe('The greet App factory function', function () {
    it('should be able to greet Amanda correctly in  IsiXhosa', function () {
        var theApp = greet();
        theApp.greetings("Molo",'amanda')
       
        assert.equal("", theApp.getMsg());


    });
    it('should be able to greet Abongile correctly in Swahili', function () {
        var theApp = greet();
        theApp.greetings("Jambo",'Abongile')
       
        assert.equal("", theApp.getMsg());
   

    });
    it('should be able to greet Marry correctly in French', function () {
        var theApp = greet();
        theApp.greetings("Bonjour",'marry')
       
        assert.equal("", theApp.getMsg());
   
    });

describe('Error messages', function () {
    it('should return "Please type in your name below" message when the language has been chosen but the text input field is still empty and the greetMe button has is clicked ', function () {
        var theApp2 = greet();
       
        assert.equal("Please type in your name below.", theApp2. errorsNoName());


    });
    it('should return "Please select a language" message when the name has been typed but the language has not been selected and the greetMe button is clicked', function () {
        var theApp3 = greet();
      
       
        assert.equal("Please select a language.", theApp3.languageErrors());
    
});
it('should return "Please type in your name and select a language" message when the greet button is clicked without selecting a language and inputing a name', function () {
    var theApp4 = greet();
   
    assert.equal("Please type in your name and select a language.", theApp4. bothError());
});
it('should return "Please type only letters" message when there are special charectors typed on the text input field and the greetMe button is clicked', function () {
    var theApp5 = greet();
   
    assert.equal("Please type only letters.", theApp5.errorSpecial());
});
});
});
