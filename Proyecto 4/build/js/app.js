/* menu */
$(document).ready(function(){
    $(".header__menu").on("click",function(){

       $("nav").slideToggle();
        })





})


function navegacionFija(){

    window.addEventListener("scroll", function(){
      //leemos el scroll y agregamos las clases a los elementos 
      header = document.querySelector(".header__contenido");
       header.classList.toggle("abajo",window.scrollY > 0);
  
  
        
  
}); 
  

//selecccionar elementos y asociarles in evento
/* 
const boton = document.querySelector('.boton--primario');
boton.addEventListener('click', function(evento){
console.log(evento.target);
evento.preventDefault();


console.log('Enviando Formulario');


}); */



//validación de Input

const datos ={
    nombre: '',
    email: '',
    mensaje: ''



}

//seleccionamos los id de nuestro html
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#formulario');


//detectamos el evento de ese elemento html y llamamos a la funcion de leerTexto
nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);

/* detectar el evento de submit */
formulario.addEventListener('submit', function(evento){
  
   evento.preventDefault();

   
/*     console.log('enviando formulario'); */

   //validar formulario

   const {nombre,email,mensaje} = datos;

  if(nombre == '' || email == '' || mensaje == ''){

        mostrarAlerta('Todos los campos son obligatorios', true);


       

       return;
       

  }
   //alerta de envio exitos
   mostrarAlerta('Exitos al enviar el formulario');






   //Enviar Formulario

   /* console.log('Enviado Formulario'); */
});


//funcion para detectar el evento que usuario realiza
function leerTexto(e){

    datos[e.target.id] = e.target.value;


/*     console.log(e.target); */


   /*  console.log(datos);
 */


}

//Refactorizar el código
function mostrarAlerta(mensaje, error = null){
    const alerta= document.createElement('P');
    alerta.textContent = mensaje;

    if(error){

        alerta.classList.add('error');
    }
    else{

        alerta.classList.add('exito')
    }
  //agregamos el mensaje en el html
    formulario.appendChild(alerta);
   /*  console.log(error);
 */
    //desaparezca la alerta despues de cierto tiempo
  setTimeout(() =>{
    alerta.remove();


    }, 1000);


}

 

//Funcion de mostrar error


}

navegacionFija();