$(document).ready(function() {

//Posts

if(window.location.href.indexOf('index') > -1) { //Funcion que hace que solo se ejecute en el index

var posts = [
  {
    title: 'Prueba de título 1',
    date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY")  , //Librería para formatear fecha
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Prueba de título 2',
    date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY")  , //Librería para formatear fecha
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Prueba de título 3',
    date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY")  , //Librería para formatear fecha
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Prueba de título 4',
    date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY")  , //Librería para formatear fecha
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Prueba de título 5',
    date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY")  , //Librería para formatear fecha
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

posts.forEach((item, index) => {
  var post = `
  <article class="post">
    <h2>${item.title}</h2>
    <span class="date">${item.date}</span>
    <p>${item.content}</p>
    <a href="#" class="buttonMore">Leer más</a>
  </article>
  `;

  $("#posts").append(post);
});
} //Cierre de funcion para que solo se ejecute en el index

//Selectora de tema
var theme = $("#theme");
$("#toGreen").click(function() {
  theme.attr("href", "css/green.css");
});

$("#toRed").click(function() {
  theme.attr("href", "css/red.css");
});

$("#toBlue").click(function() {
  theme.attr("href", "css/blue.css");
});

//Scroll arriba de la web
$('.subir').click(function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0 //Sube arriba
  }, 500);
  return false;
});

//Login falso

$("#login form").submit(function(){
  var formName = $("#formName").val();

  localStorage.setItem("formName", formName);
});

var formName = localStorage.getItem("formName");

if(formName != null && formName != "undefined") {
var aboutParrafo = $("#about p")
aboutParrafo.html("<br><strong>Bienvenido, " + formName + " " + "</strong>");
aboutParrafo.append("<a href='#' id='logout'> Cerrar Sesión</a>");
$("#login").hide();
$("#logout").click(function(){
  localStorage.clear();
  location.reload();
});
}

//Acordeon

if(window.location.href.indexOf('about') > -1) { //Funcion que hace que solo se ejecute en el about
  $("#acordeon").accordion();
}

//Reloj

if(window.location.href.indexOf('reloj') > -1) { //Funcion que hace que solo se ejecute en el reloj

  setInterval(function () {
  var reloj = moment().format("h:mm:ss");
  $('#reloj').html(reloj);
    },1000);
}

//Validacion

if(window.location.href.indexOf('contact') > -1) { //Funcion que hace que solo se ejecute en el contact

  $("form input[name = 'date']").datepicker({
    dateFormat: 'dd-mm-yy'
  });

$.validate({
  lang: 'es',
  errorMessagePosition: 'top',
  scrollToTopOnError: true
});
}//Cierre window.location

}); //Cierre ready
