
var output = document.getElementById('output')
var btn =document.getElementById('btn')
console.log(input)


function urlText(){
    var input = document.getElementById('input')
    var url = "https://api.funtranslations.com/translate/ferb-latin.json" +"?text="+ input.value
    console.log(url)
    fetch(url)
    .then(response=>response.json())
    .then(json=>{
        var trans = (json.contents.translated)
        output.innerHTML = trans
    })
}

btn.addEventListener('click',urlText)



