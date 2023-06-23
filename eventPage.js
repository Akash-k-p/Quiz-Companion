chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.todo == "GetAnswers"){
        console.log("Hello World");

    }
}) ;