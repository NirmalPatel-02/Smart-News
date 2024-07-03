const API_KEY="9ce4d6f4b6054645af350a0f4a98ae5e";
const url="https://newsapi.org/v2/everything?q=";

let country=document.getElementById('country');
let about=document.getElementById('about');

document.getElementById("f-search").addEventListener("click" ,() => fetchNews(country.value , about.value));

async function fetchNews(a,b){
    const res= await fetch(`${url}${a + b}&apiKey=${API_KEY}`);
    const data= await res.json();
    bindData(data.articles);
}
function bindData(articles){
    const display = document.getElementById('display');
    const main= document.getElementById('main');
    const title= document.getElementById('title');
    const detail=document.getElementById('detail');
    const img=document.getElementById('img');

    display.innerHTML="";
    articles.forEach((articles) => {
        if(!articles.urlToImage){
            return;
        } 
        const clone = main.cloneNode(true);
        display.appendChild(clone); 
        title.innerHTML =articles.title;
        detail.innerHTML=articles.description;
        img.src = articles.urlToImage;
    });
}
