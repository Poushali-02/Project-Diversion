
let navbar = document.querySelector(".nav-bar");
const al = () => {
    alert("You are redirected to another page!");
}
navbar.addEventListener("click", al);//Event Listener  //Alerting on event -> click

//Dark mode Light mode
let header = document.querySelector("#Heading");
let toggle = document.querySelector("#modeToggle");
let body = document.querySelector("body");
let currMode = "light";
const mode = () =>{
    if(currMode === "light"){
        currMode = "dark";//changing value of currMode to dark
        toggle.innerText = "Light";//changing display
        body.style.backgroundColor = "black";
        toggle.style.backgroundColor = "#EFE9D5";
        toggle.style.color = "black";
        header.style.color = "#EFE9D5"
        document.querySelector("body").style.color = "#EFE9D5";
        document.querySelector("body").style.borderColor = "black";//changing mode to dark
        
    } else{
        currMode = "light";//changing value of currMode to light
        toggle.innerText = "Dark";//changing display
        body.style.backgroundColor = "#EFE9D5";
        toggle.style.backgroundColor = "black";
        toggle.style.color = "#EFE9D5";
        header.style.color = "#27445D";
        document.querySelector("body").style.color = "black";
        document.querySelector("body").style.borderColor = "#EFE9D5"; //changing mode to light
    }
}
toggle.addEventListener("click", mode);