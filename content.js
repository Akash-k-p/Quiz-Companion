chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){

        if (request.todo == "GetAnswers"){
        // var paras = document.querySelectorAll('p') ;
        var questionParas = document.querySelectorAll('.qt-question') ;
        var choicesParas = document.querySelectorAll('.qt-choices,.qt-response') ;
        var childrenChoicesParas = [] 

        questionParas = Array.from(questionParas) ;
        choicesParas = Array.from(choicesParas) ;

        var questionParasText = [] ;
        var choicesParasText = [] ;

        // get the children of the choices tags cause thats where the choices are
        choicesParas.forEach(function(element){
            childrenChoicesParas.push(Array.from(element.children)) ;
        }) ;


        // get the text content of the question tags 

    

        try {
        questionParas.forEach(function (element) {
            questionParasText.push(element.textContent);
          });
        } catch (error) {
            console.log(typeof(questionParas),typeof(questionParasText)) ;
            console.log("Error while processing the questions :",questionParas.length);

        }

            // get the text content of the choices tags
        try {
        childrenChoicesParas.forEach(function (element) {
            var temp = [] ;
                element.forEach(function (child) {
                    temp.push(child.textContent) ;
                });
                choicesParasText.push(temp) ;
          
            });
        } catch (error) {
            console.log("error while processing the choices",typeof(choicesParas),typeof(choicesParasText)) ;
        }   

       questionParasText.forEach(function(element,i){
              console.log("Q",i," :",element,"\n") ;
              console.log("Choices\n") ;
              choicesParasText[i].forEach(function(choice,j){
                    console.log(j,":",choice,"\n") ;

              console.log("\n------------------------------------\n") ;
       }) ;
    });
}   
});