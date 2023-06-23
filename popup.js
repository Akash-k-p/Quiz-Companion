$(function(){

    $('#GetAnswers').click(function(){
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, async function(tabs) {
            await chrome.tabs.sendMessage(tabs[0].id, {
                todo: "GetAnswers" ,

            });
        });
    });






}) ;