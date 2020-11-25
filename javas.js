function fetchData(){
    fetch("https://api.jsonbin.io/b/5faab1a348818715939ecd04/3")
    .then(response =>{
        return response.json();
    })
    .then(data=>{
        console.log(data);
        const html = data.map(user => {
            return `
            <div class="cont" id="container">
        <table class="tg">
            <thead>
            <tr>
                <th class="tg-0lax" rowspan="3"></th>
                <div class="news">
                    <div class="btn">
                    <button id="voteupbtn">
				        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z"/></svg>
                    </button>
                                <input type="number" id="input1" value="0" name="">
                    <button id="votedownbtn" style="margin-top: 120px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"/></svg>
                    </button>
                                <input type="number" id="input2" value="0" name="">
                </div>
                </th>
            </tr>
        
        <div class="title"> ${user.title}</div>
        <tr><td><div class="id"> ID: ${user.id}</div></td></tr>
            <tr>
                <td class="tg-0lax">
                    <div class="publishdate">${user.publishedDate}</div>
                </td>
            </tr>
            </thead>
        </table>
    </div> 
            `
        })
        document
        .querySelector("#liste")
        .insertAdjacentHTML('afterbegin', html);
     
    })
}
fetchData();








/*
const api_url = 'https://api.jsonbin.io/b/5faab1a348818715939ecd04/3'
    async function getData(){
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);
        console.log(data.news);
        const {type} = data;
        
            
        }
        getData();
        function (jsob){
        const filteredArray = jsob.filter(function newsItem){
        
        










 console.log(data.data);
    const html = data.data;
    .map(user => {
        return `
        <div class"news">
        <p>Title: ${}
        </div>`
    })
    .join("");
    console.log(html);
    document.querySelector("#app").insertAdjacentHTML("afterbegin", html);















    function constructor(news){
        this.id = news.id;
        this.title = news.title;
        this.thumb = news.thumb;
        this.thumbAlt = news.alt;
        this.publishedDate = news.publishedDate;
        this.shareCount = news.shareCount;
        }
        //for(let i=0; i< newsList.lenght; i++){
        //	console.log(newsList[i]);
        //}
        newsList.forEach((data) => {
            console.log(data);
        });
        */
       /* Render(){
            const html = string.raw;
            return `<article class="recentnews" 
                id="recentnews_${this.id}">
                <img src="${this.thumb}" class="recentnews-thumb"/>
                <div class="recentnews-text">
                    <h1 class="recentnews-header" contenteditable="true" id="recentnews_title"
                    <div class="recentnews-stat">
                        <div class="recentnews-pubdate"> ${this.publishedDate} </div>
                        <div class="recentnews-shareCount"> ${this.shareCount} </div>
                            </a> href='#'>More...<a>
                    <div>
            </article>`
        } */
    
    
        
    
