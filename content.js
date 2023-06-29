const article = document.querySelector("article");
let text = "";
if (article) {
    text = article.textContent + text;
    console.log(text);
}
const sentence = text.split(/[.!?]+/);
console.log(text);
console.log(sentence);
//sending message

//Post Request
const url = 'http://127.0.0.1:8001/get'
 fetch(url,{
    mode:'cors',
    method: 'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({text}),
 })
    .then(res => res.json())
    .then(datatext => {
        // console.log(text.choices[0].text);
        // console.log(datatext.choices[0].text);
        console.log(datatext.choices[0].text);
        chrome.runtime.sendMessage({
            // text
            // data:text
            datatext
          });
    })
    .catch(error =>{
        console.error('Error',error);
    })

