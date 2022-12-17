var textInput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
/** Try after 630pm */
var serverURL = "https://api.funtranslations.com/translate/emoji.json";

function constructURL(text)
{
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error occured",error);
    alert("Error! There's something wrong with the server.");
}
 
function doFetch(text)
{
    const inputText = textInput.value;
    fetch(constructURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
         }
         ) 
    .catch(errorHandler);
};




btnTranslate.addEventListener("click", doFetch);