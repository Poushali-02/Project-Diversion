//Always js code event handling > inline event handling
// One event can be handled once only through function but by event listener multiple access
let navbar = document.querySelector(".nav-bar");
const al = () => {
    alert("You are redirected to another page!");
}
navbar.addEventListener("click", al);//Event Listener  //Alerting on event -> click
//-------------------------------------------------------------------------------------------
//Dark mode Light mode
let toggle = document.querySelector("#modeToggle");
let body = document.querySelector("body");
let currMode = "light";
const mode = () =>{
    if(currMode === "light"){
        currMode = "dark";//changing value of currMode to dark
        toggle.innerText = "Light";//changing display
        body.style.backgroundColor = "black";
        toggle.style.backgroundColor = "beige";
        toggle.style.color = "black";
        document.querySelector("body").style.color = "beige";
        document.querySelector("body").style.borderColor = "black";//changing mode to dark
        
    } else{
        currMode = "light";//changing value of currMode to light
        toggle.innerText = "Dark";//changing display
        body.style.backgroundColor = "beige";
        toggle.style.backgroundColor = "black";
        toggle.style.color = "beige";
        document.querySelector("body").style.color = "black";
        document.querySelector("body").style.borderColor = "beige"; //changing mode to light
    }
}
toggle.addEventListener("click", mode);