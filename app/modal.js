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

import marked from 'marked'
import axios from 'axios'
import fm from 'front-matter'

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
        ev.preventDefault()
        classie.add(modal, 'md-show')
        overlay.removeEventListener('click', removeModalHandler)
        overlay.addEventListener('click', removeModalHandler)

        let filename = el.getAttribute('data-project')
        axios.get(`/projects/${filename}.md`)
          .then((response) => {
            let projectData = fm(response.data)
            modal.querySelector('.title').innerHTML = projectData.attributes.title + ' <span>' + projectData.attributes.year + '</span>'
            modal.querySelector('.scroll-content').innerHTML = marked(projectData.body)
          })
      })

      close.addEventListener('click', function (ev) {
        ev.stopPropagation()
        removeModalHandler()
      })
    })
  }

  init()
})()
