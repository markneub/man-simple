/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 *
 * Modified by Mark Neuburger
 *
 */

var ModalEffects = (function () {
  function init () {
    var overlay = document.querySelector('.md-overlay');

    [].slice.call(document.querySelectorAll('.md-trigger')).forEach(function (el, i) {
      var modal = document.querySelector('#modal'),
        close = modal.querySelector('.md-close')

      function removeModalHandler () {
        classie.remove(modal, 'md-show')
      }

      el.addEventListener('click', function (ev) {
        classie.add(modal, 'md-show')
        overlay.removeEventListener('click', removeModalHandler)
        overlay.addEventListener('click', removeModalHandler)
      })

      close.addEventListener('click', function (ev) {
        ev.stopPropagation()
        removeModalHandler()
      })
    })
  }

  init()
})()
