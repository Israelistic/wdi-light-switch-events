var button = document.querySelector(".switch");
var light = document.querySelector(".light");
var statusheading = document.querySelector("h1.status");

button.addEventListener('click', function(){
        if(button.classList.contains("on")){
            button.classList.remove("on");
            button.classList.add("off");
            light.classList.remove("light");
            light.classList.add("dark");
            statusheading.innerText = "Hey, who turned off the lights?";
        }else{
            button.classList.remove("off");
            button.classList.add("on");
            light.classList.remove("dark");
            light.classList.add("light");
            statusheading.innerText = "It's so bright in here!";

        };//if-else
    }//function def

);// call addEventListener
