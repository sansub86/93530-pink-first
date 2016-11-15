var btnSwitch = document.querySelector(".main-nav__switch");
var burgerIcon = document.querySelector(".main-nav__burger");
var crossIcon = document.querySelector(".main-nav__cross");
var mainMenu = document.querySelector(".main-menu");
var mainNav = document.querySelector(".main-nav");
var textfield = document.querySelectorAll(".forms__input-text");
var mainForm = document.querySelector(".forms__main-form");
var nameTextfield = document.getElementById("name-id");
var mailTextfield = document.getElementById("mail-id");
var popupError = document.querySelector(".forms__popup-error");
var popupSend = document.querySelector(".forms__popup-send");
var btnOk = document.querySelector(".forms--btn-ok");
var btnClose = document.querySelector(".forms--btn-close");
//скроем выпадающее меню хедера и всплывающие окна
btnSwitch.classList.remove("main-nav__switch--cross");
burgerIcon.classList.remove("main-nav--hide");
crossIcon.classList.add("main-nav--hide");
if(popupError!=null)popupError.classList.add("main-nav--hide");
if(popupSend!=null)popupSend.classList.add("main-nav--hide");
if(mainMenu!=null)mainMenu.classList.add("main-menu--closed");
if(mainNav!=null)mainNav.classList.remove("main-nav--opacity");
//обработчик нажатия кнопки бургер
btnSwitch.addEventListener ("click", function(event) {
  event.preventDefault();
  btnSwitch.classList.toggle("main-nav__switch--cross");
  burgerIcon.classList.toggle("main-nav--hide");
  crossIcon.classList.toggle("main-nav--hide");
  mainMenu.classList.toggle("main-menu--closed");
  mainNav.classList.toggle("main-nav--opacity");
});

/*скрипт для текстовых полей ввода*/
for (var i = 0; i < textfield.length; i++) {
  textfield[i].addEventListener("focusout", function(event) {
  var elem = this;
  var label = this.nextElementSibling;
    if(elem.value.length == 0) {
    label.classList.remove("main-nav--hide");
    } else {
    label.classList.add("main-nav--hide");
    }
  }, false);
}
//скрипт для обработки события нажатия кнопки отправки
if(mainForm!=null) {
  mainForm.addEventListener("submit", function(event){
    event.preventDefault();
    if (!nameTextfield.value || !mailTextfield.value) {
          event.preventDefault();
          console.log("Нужно ввести имя и электронный адрес");
          popupError.classList.remove("main-nav--hide");

        } else {
          popupSend.classList.remove("main-nav--hide");
        }

  });
}
//обработчик события нажатия кнопок всплывающих окон
if(btnOk!=null) {
  btnOk.addEventListener("click", function(event){
    event.preventDefault();
    popupError.classList.add("main-nav--hide");
  });
}
if(btnClose!=null) {
  btnClose.addEventListener("click", function(event){
    event.preventDefault();
    popupSend.classList.add("main-nav--hide");
  });
}
//добавим карту
function initialize() {
  var mapCanvas = document.getElementById('map');

  var mapOptions = {
    scrollwheel: false,
    center: new google.maps.LatLng(59.9388218,30.3230753),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var image = './img/icon-map-marker.svg';
  var myLatLng = new google.maps.LatLng(59.9388218,30.3230753);
  var pinkMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
