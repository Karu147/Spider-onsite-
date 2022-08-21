let filename1 = prompt("Please enter your file name");
function favFamily(selectTag) {
    var listValue1 = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("text").style.fontFamily = listValue1;
}
function favSize(selectTag) {
    var listValue2 = selectTag.options[selectTag.selectedIndex].text;
    if (listValue2==="5") {
        document.getElementById("text").style.fontSize = "xx-small";
    }
    if (listValue2==="10") {
        document.getElementById("text").style.fontSize = "x-small";
    }
    if (listValue2==="15") {
        document.getElementById("text").style.fontSize = "small";
    }
    if (listValue2==="20") {
        document.getElementById("text").style.fontSize = "medium";
    }
    if (listValue2==="25") {
        document.getElementById("text").style.fontSize = "large";
    }
    if (listValue2==="30") {
        document.getElementById("text").style.fontSize = "x-large";
    }
    if (listValue2==="35") {
        document.getElementById("text").style.fontSize = "xx-large";
    }   
}
function favStyle(selectTag) {
    var listValue3 = selectTag.options[selectTag.selectedIndex].text;
    if (listValue3==="Italic"){
        document.getElementById("text").style.fontStyle = "italic";
        document.getElementById("text").style.fontWeight = "100";
    }
    if (listValue3==="Bold"){
        document.getElementById("text").style.fontStyle = "normal";
        document.getElementById("text").style.fontWeight = "900";
    }
    if (listValue3==="Bold-Italic"){
        document.getElementById("text").style.fontStyle = "italic";
        document.getElementById("text").style.fontWeight = "900";
    }
}
function download(filename, text){
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
document.getElementById("dwn-btn").addEventListener("click", function() {
    var text = document.getElementById("text").value;
    var filename = filename1+".txt" ;
    download(filename, text);
}, false);
