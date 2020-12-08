var btnTranslate = document.querySelector("#btn-Translate")
var txtInput = document.querySelector("#txt-Input")
var output = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
    alert('something is wrong! please Try again')
}

function clickHandler() {
    var inputText = txtInput.value
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            output.innerText = json.contents.translated
        })
        .catch(errorHandler)
}


btnTranslate.addEventListener("click", clickHandler)