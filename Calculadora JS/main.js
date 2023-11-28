const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".butt");
 
botones.forEach(boton=>{
    boton.addEventListener("click", ()=>{
        const botonon = boton.textContent;

        if (boton.id === "borrar") {
            pantalla.textContent = "0";
            return;
        } 

        if (boton.id === "del") {
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Sintaxt error" ){
                pantalla.textContent = "0";
            }else{
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            } 
            return;

        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent); 
            } catch{
                pantalla.textContent = "Sintaxt error"
            }
            
            return;
        }

        if (pantalla.textContent === "0") {
            pantalla.textContent = botonon; 
        }else{
            pantalla.textContent += boton.textContent;
        }
        
    })
})