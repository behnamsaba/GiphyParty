const form = document.querySelector("#gifyform");
const userInput = document.querySelector("input[name=gif]");
const section = document.querySelector("#result")

form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log(userInput.value);
    
    section.addEventListener("click",function(e){
        if(e.target.tagName === "IMG"){
            e.target.remove();
        }
    })

    async function findimage(){
        const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${userInput.value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
        let url = res.data.data[Math.floor(Math.random() * 50)].images.original.url;
        $("#result").append("<div><img placeholder=image src="+url+"></div>");

        
    
    }
    findimage();

  
    
    

    






})


