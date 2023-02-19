function checkHostElement(){
    var div = document.createElement("div");
    div.classList.add("checkhost");
    var divtext = document.createTextNode("You're viewing website on localhost, mobile.js has been disabled.");
    div.appendChild(divtext);
    div.style.display = 'block';
    var wrapperContainer = document.getElementsByClassName("wrapper-container")[0]
    wrapperContainer.insertBefore(div, wrapperContainer.firstChild);
}

$(function(){
    if(window.location.host.includes("127.0.0.1") || window.location.host.includes("localhost")){
        checkHostElement();
        // this function will run if the url is localhost
    } else {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "/assets/js/mobile.js";
        document.getElementsByTagName("head")[0].appendChild(script);
    }
})