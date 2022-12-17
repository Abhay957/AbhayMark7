var textInput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
/** Try after 630pm */
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function constructURL(text)
{
    return serverURL + "?" + "text=" + text;
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
};




btnTranslate.addEventListener("click", doFetch);