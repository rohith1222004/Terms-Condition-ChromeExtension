
    console.log("hey");

    chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse){
          console.log(request.text);
          localStorage.setItem('myText',request.text);
      }
  );

  var storedText = localStorage.getItem('myText'); 
  document.getElementById("btn")
  .addEventListener("click",() =>{
      var msg = storedText
      const utterance = new SpeechSynthesisUtterance(msg)
      speechSynthesis.speak(utterance)})