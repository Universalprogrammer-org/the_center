var timepass = document.getElementById("Time");
function Time() {
    setInterval(
        function(){
            var time = new Date();
            var hours = time.getHours();
            var minutes = time.getMinutes();

            const invalid_numbers = [1,2,3,4,5,6,7,8,9,0];

            if(invalid_numbers.includes(minutes)){
                minutes = "0" + minutes;
            }

            timepass.textContent = hours + ":" + minutes;

        }, 1000); 
}
function enter1() {
    var menu = document.getElementById("menu_bar");
    var menu_title = document.getElementById("menu_title");
    var menu_options = document.getElementById("menu_option");
    var menu_options_2 = document.getElementById("menu_option_2");
    var menu_options_3 = document.getElementById("menu_option_3");
    
    if (typeof detective !== "undefined") {
        clearInterval(detective);
    }

    if (menu.classList.contains("anim-forward") && menu.classList.contains("a7")) {
        menu.classList.remove("anim-forward");
        menu.classList.add("anim-reverse");
        
        menu_title.textContent = "";
        menu_title.style.display = "none";
        menu_options.style.display = "none";
        menu_options_2.style.display = "none";
        menu_options_3.style.display = "none";

        detective = setInterval(function() {
            menu_title.textContent = "";
            menu_title.style.display = "none";
            menu_options.style.display = "none";
            menu_options_2.style.display = "none";
            menu_options_3.style.display = "none";
        }, 1);

        setTimeout(function() {
            clearInterval(detective);
        }, 5000);

    } else if (menu.classList.contains("a7") && menu.classList.contains("anim-reverse")) {
        menu.classList.remove("anim-reverse");
        menu.classList.add("anim-forward");

        clearInterval(detective);
        menu_title.style.display = "block";

        setTimeout(function(){
            menu_title.textContent = "<";
            setTimeout(function(){
                menu_title.textContent = "</";
                setTimeout(function(){
                    menu_title.textContent = "</m";
                    setTimeout(function(){
                        menu_title.textContent = "</me";
                        setTimeout(function(){
                            menu_title.textContent = "</men";
                            setTimeout(function(){
                                menu_title.textContent = "</menu";
                                setTimeout(function(){
                                    menu_title.textContent = "</menu>";
                                    menu_options.style.display = "block";
                                    setTimeout(function(){
                                        menu_options.style.textShadow = "15px 15px 7px white";
                                        menu_options_2.style.display = "block"
                                        setTimeout(function(){
                                            menu_options.style.textShadow = "5px 5px 5px white";
                                            menu_options_2.style.textShadow = "15px 15px 7px white";
                                            menu_options_3.style.display = "block";
                                            setTimeout(function(){
                                                menu_options_2.style.textShadow = "5px 5px 5px white";
                                                menu_options_3.style.textShadow = "15px 15px 7px white";
                                                setTimeout(function(){
                                                    menu_options_3.style.textShadow = "5px 5px 5px white";
                                                }, 300);
                                            }, 300);
                                        }, 300);
                                    }, 300);
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }
    else if(menu.classList.contains("a7")){
        menu.classList.add("anim-forward");
        menu_title.style.display = "block";
        setTimeout(function(){
            menu_title.textContent = "<";
            setTimeout(function(){
                menu_title.textContent = "</";
                setTimeout(function(){
                    menu_title.textContent = "</m";
                    setTimeout(function(){
                        menu_title.textContent = "</me";
                        setTimeout(function(){
                            menu_title.textContent = "</men";
                            setTimeout(function(){
                                menu_title.textContent = "</menu";
                                setTimeout(function(){
                                    menu_title.textContent = "</menu>";
                                    menu_options.style.display = "block";
                                    setTimeout(function(){
                                        menu_options.style.textShadow = "15px 15px 7px white";
                                        menu_options_2.style.display = "block";
                                        setTimeout(function(){
                                            menu_options.style.textShadow = "5px 5px 5px white";
                                            menu_options_2.style.textShadow = "15px 15px 7px white";
                                            menu_options_3.style.display = "block";
                                            setTimeout(function(){
                                                menu_options_2.style.textShadow = "5px 5px 5px white";
                                                menu_options_3.style.textShadow = "15px 15px 7px white";
                                                setTimeout(function(){
                                                    menu_options_3.style.textShadow = "5px 5px 5px white";
                                                }, 300);
                                            }, 300);
                                        }, 300);
                                    }, 300);
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }
    else {
        alert("ERROR DE CLASE A7");
    }
}
function enter2(){
    window.location.href = "Productos.html";
}
Time();
/*Versión 1.0.3.1*/
