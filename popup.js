    console.log("hey");
    chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse){
        //   console.log(request.datatext.choices[0].text);
          localStorage.setItem('completionText',request.datatext.choices[0].text);
      }
  );

  var storedText = localStorage.getItem('completionText'); 
  console.log(storedText);
  document.getElementById("hello").innerHTML = storedText
  document.getElementById("btn")
  .addEventListener("click",() =>{
      var msg = storedText
      const utterance = new SpeechSynthesisUtterance(msg)
      speechSynthesis.speak(utterance)})
//   chrome.runtime.reload();
//   localStorage.clear('completionText')

  
