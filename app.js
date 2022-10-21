
/* funcion para remover las cookies*/
let cookies =  document.querySelector("#accept");
function remover(){
    cookies.remove();
    
  }
cookies.addEventListener("click",remover);

/* funcion para mostrar alerta en los botones de nav*/

let btn = document.querySelectorAll(".btn");
console.log(btn);

function alerta(){
    alert("Loading wather");   
}
for(let i=0; i<btn.length;i++){
   
    btn[i].addEventListener("click",alerta);
}

/* cambia de celcius a farnheit*/

let temp = document.querySelector(".option"); /*captura el contenido del selector**/
let min;
let max;

function temperatura(){
   
    if(temp.value=="F"){
        console.log(temp.value);
         min =  document.getElementsByClassName("min"); /*captura arreglo con los valores min*/
         max =  document.getElementsByClassName("max"); /*captura arreglo con los valores max*/
    
         transoformaCaF();
         temp.value="C"
    }else if(temp.value=="C"){
        
        min =  document.getElementsByClassName("min"); /*captura arreglo con los valores min*/
        max =  document.getElementsByClassName("max"); /*captura arreglo con los valores max*/
    
        transformaFaC();
        temp.value="F";
    }
}


function transformaFaC(){   
    for(var i=0; i<min.length;i++){  
        /*transforma la temperatura min de celcius a farenheit */
        let tempMin= min[i].innerText;          
        let gradosMin= MintransformaCelciusF(tempMin);
        min[i].innerText = gradosMin; 
        
    }     
    for(var i=0; i<max.length;i++){  
          /*transforma la temperatura max de celcius a farenheit */
        let tempMax= max[i].innerText;             
        let gradosMax= MaxtransformaCelciusF(tempMax);
        max[i].innerText = gradosMax;  
           
    }

}  
    function transoformaCaF(){
        for(var i=0; i<min.length;i++){  
            /*transforma la temperatura min de farenheit a celcius */
            let tempMin= min[i].innerText;          
            let gradosMin= MintransformaFarengC(tempMin);
            min[i].innerText = gradosMin; 
           
        }     
        for(var i=0; i<max.length;i++){  
            /*transforma la temperatura min de farenheit a celcius */
            let tempMax= max[i].innerText;             
            let gradosMax= MaxtransformaFarengC(tempMax);
            max[i].innerText = gradosMax;      
          
        }   
      
    }


function MintransformaCelciusF(min){
    let farenMin;
    farenMin=(9/5)*min+32;
    let farenMinTruc=Math.trunc(farenMin);
    return  farenMinTruc;
    
   
}

function MaxtransformaCelciusF(max){
    var farenMax;
    farenMax=(9/5)*max+32;
    let farenMaxTruc=Math.trunc(farenMax);
    return farenMaxTruc;
}


function MintransformaFarengC(min){
    let celciusMin;
    celciusMin=(min-32)*(5/9)
    let celciusMinTruc=Math.trunc(celciusMin);
    return celciusMinTruc;

}

function MaxtransformaFarengC(max){
    let celciusMax;
    celciusMax=(max-32)*(5/9)
    let celciusMaxTruc=Math.trunc(celciusMax);
    return celciusMaxTruc;
}
