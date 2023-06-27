const article = document.querySelector("article");
let text = "";
if (article) {
    text = article.textContent + text;
    console.log(text);
}
//sending message
chrome.runtime.sendMessage({
    text 
  });

//Post Request
const url = 'http://127.0.0.1:8001/get'
 fetch(url,{
    method: 'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({text}),
 })
    .then(res => res.json())
    .then(text => {
        console.log(text);
    })
    .catch(error =>{
        console.error('Error',error);
    })
