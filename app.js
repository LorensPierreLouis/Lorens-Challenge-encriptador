/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */






const textoEnDescriptado = document.getElementById("texto").value;
const mensaje=document.getElementById("mensaje");
const mensajeDerecho= document.getElementById("mensaje").value;
const tituloDerecho= document.getElementById("tituloParrafo");
const copiado=document.getElementById("copiar");
const deshaBtnEn=document.getElementById("btnEn");
const deshaBtnDes=document.getElementById("btnDes");

function botonEncriptar(){
    let codigos =document.getElementById("texto").value.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    
    if(document.getElementById("texto").value.length !=0){
        document.getElementById("mensaje").value=codigos;
        tituloDerecho.style.visibility='hidden';
        copiado.style.visibility='visible';
        mensaje.style.backgroundImage='none';
    }

}



function botonDesencriptar(){
    let codigos =document.getElementById("texto").value.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    
    if(document.getElementById("texto").value.length !=0){
        document.getElementById("mensaje").value=codigos;
        tituloDerecho.style.visibility='hidden';
        copiado.style.visibility='visible';
        mensaje.style.backgroundImage='none';
    }

}

function botonCopiar(){
    document.getElementById("mensaje").select();
    navigator.clipboard.writeText(document.getElementById("mensaje").value);
    alert("EL TEXTO COPIADO ES:" + (document.getElementById("mensaje").value));
    document.getElementById("texto").value="";
    document.getElementById("mensaje").value="";
    tituloDerecho.style.visibility='visible';
    mensaje.style.backgroundImage='';
    copiado.style.visibility='hidden';
   
}