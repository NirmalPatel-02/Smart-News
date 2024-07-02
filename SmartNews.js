const API_KEY="9ce4d6f4b6054645af350a0f4a98ae5e";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener("load" ,() => fetchNews("India sports"));
async function fetchNews(query){
    const res= await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data= await res.json();
    bindData(data.articles);
}
function bindData(articles){
    const main = document.getElementById('main');
    const news_text= document.getElementById('news-text');
    main.innerHTML ="";

    articles.forEach((articles) => {
        const clone = news_text.cloneNode(true);
        main.appendChild(clone); 
        news_text.innerHTML =articles.title
    });
}
