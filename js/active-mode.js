'use strict';

(function () {

  var MAIN_PIN_POINTER_HEIGHT = 10;
  var MAIN_PIN_POINTER_WIDTH = 22;
  // var ENTER_KEY = 'Enter';

  // Импорт данных из других модулей
  var addressInput = window.inactiveMode.addressInput;
  // var leftCoordinate = window.inactiveMode.leftCoordinate;
  // var topCoordinate = window.inactiveMode.topCoordinate;
  var mainPin = window.inactiveMode.mainPin;
  var errorTemplate = document.querySelector('#error').content.querySelector('.error');
  var main = document.querySelector('main');

  // function changeСoordinates() {
  //   addressInput.setAttribute('value', String((leftCoordinate + Math.round(MAIN_PIN_POINTER_WIDTH / 2))) + ', ' + String((topCoordinate + Math.round(MAIN_PIN_POINTER_HEIGHT))));
  //   return addressInput.value;
  // }

  // получение и рендер данных с сервера
  // function getAndRenderData(dataFromServer) {
  //
  //   var allData = JSON.parse(dataFromServer);
  //
  //   allData.forEach(function (data) {
  //     window.serverRequest.posters.push(data);
  //   });
  //   var data = window.filter.filterByData(window.serverRequest.posters);
  //   // window.filter.filterByData(window.serverRequest.posters);
  //   window.pins.addPinsToDom(data);
  //   window.card.addCardToPin(data);
  // }

  // закрытие окна с ошибкой
  function closeError() {
    main.removeChild(document.querySelector('.error'));
  }

  // появление окна с ошибкой
  function showErrorMessage(msg) {

    var errorClone = errorTemplate.cloneNode(true);
    var fragment = document.createDocumentFragment();

    errorClone.querySelector('.error__message').innerHTML = msg;
    fragment.appendChild(errorClone);
    main.appendChild(fragment);
    // Закрытие окна с ошибкой
    window.addEventListener('click', closeError);
  }

  // вкл Активное состояние
  function changeOnActiveMode() {
    document.querySelector('.map').classList.remove('map--faded');
    document.querySelector('.ad-form').classList.remove('ad-form--disabled');
    window.inactiveMode.notDisabledAllFildset();
    // changeСoordinates();
    window.serverRequest.onSuccesLoad('https://js.dump.academy/keksobooking/data', window.filter.filterByData, showErrorMessage);
    window.map.onActivePin();
  }

  // Экспорт функций модуля
  window.activeMode = {
    changeOnActiveMode: changeOnActiveMode,
    mainPin: mainPin,
    MAIN_PIN_POINTER_WIDTH: MAIN_PIN_POINTER_WIDTH,
    MAIN_PIN_POINTER_HEIGHT: MAIN_PIN_POINTER_HEIGHT,
    addressInput: addressInput
  };
})();
