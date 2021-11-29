function clickFunction(){
    var  eduButton = document.querySelector("#click-me");
    eduButton.classList.remove("collapsed");
    eduButton.setAttribute("Aria-expanded", "true");
    
    document.querySelector("#question-education").classList.add("show");
    
}

document.querySelector("#click-me").addEventListener("CLICK", clickFunction);