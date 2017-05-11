const h = require('virtual-dom/h')
const ee = require('../events')

module.exports = function (state) {
  return h('div', [
    h('.brand', 'Aly & TJ'),
    h('.address-bar', 'Days since the wedding of Thomas Joshua and Alyson Julia'),
    h('nav.navbar.navbar-default', {role:'navigation'}, [
      h('.container', [
        h('.navbar-header', [
          h('button.navbar-toggle', {
            type:'button',
            'data-toggle':'collapse',
            'data-target':'#bs-example-navbar-collapse-1'
          }, [
            h('span.sr-only', 'Toggle navigation'),
            h('span.icon-bar'),
            h('span.icon-bar'),
            h('span.icon-bar')
          ]),
          h('a.navbar-brand', {
            href:'/'
          }, 'alyandtj.com')
        ]),
          h('#clockdiv', [
            h('#clockElement', [h('span.days.clockNumber', state.days +''), ' Days']),
            h('#clockElement', [h('span.hours.clockNumber', state.hours+''), ' Hours']),
            h('#clockElement', [h('span.minutes.clockNumber', state.mins+''), ' Minutes']),
            h('#clockElement', [h('span.seconds.clockNumber', state.secs+''), ' Seconds']),
          ])
      ])
    ]),
    h('.container', [
      h('#noPadding.stopIt.row.box', h('#noPadding2.col-lg-12.text-center', [
        h('#carousel-example-generic.carousel.slide', [
          h('ol.carousel-indicators.hidden-xs', [
            h('li.generic.active', {'data-target':'#carousel-example-generic', 'data-slide-to':'0'}),
            h('li.generic', {'data-target':'#carousel-example-generic', 'data-slide-to':'1'}),
            h('li.generic', {'data-target':'#carousel-example-generic', 'data-slide-to':'2'}),
            h('li.generic', {'data-target':'#carousel-example-generic', 'data-slide-to':'3'}),
            h('li.generic', {'data-target':'#carousel-example-generic', 'data-slide-to':'4'}),
          ]),
          h('.carousel-inner', [
            h('.item.active', h('img.img-responsive.img-full', {src:'/img/alyone.jpg',alt:''})),
            h('.item', h('img.img-responsive.img-full', {src:'/img/origin.jpg',alt:''})),
            h('.item', h('img.img-responsive.img-full', {src:'/img/thisisone.jpg',alt:''})),
            h('.item', h('img.img-responsive.img-full', {src:'/img/workplease.jpg',alt:''})),
            h('.item', h('img.img-responsive.img-full', {src:'/img/no.jpg',alt:''}))
          ]),
          h('a.left.carousel-control', {
            //href:'#carousel-example-generic',
            //'data-slide':'prev',
            click: function(e){
              console.log('hello, prev')
              //$('.carousel').carousel('prev')
            }
          }, h('span.icon-prev')),
          h('a.right.carousel-control', {
            //href:'#carousel-example-generic',
            //'data-slide':'next',
            click: function(e){
              console.log('hello, next')
              //$('.carousel').carousel('next')
            }
          }, h('span.icon-next'))
        ]),
        h('h2.brand-before', h('small', 'The Future')),
        h('h1.brand-name', 'Mr. & Mrs.'),
        h('#noteBelow', 'PLEASE LEAVE A NOTE FOR ALY AND TJ BELOW.'),
        h('hr.tagline-divider'),
        h('h2', h('small', [
          'By ',
          h('strong', 'Paul Borawski')
        ]))
      ])),
      h('.stopIt.row.box', [
        h('.col-lg-12.text-center', [
          h('h2.intro-text.text-center', 'Check out the wedding video here'),
          h('div', { innerHTML: "<iframe src='https://player.vimeo.com/video/207156155' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href='https://vimeo.com/207156155'>AlyTjWeddingFinal</a> from <a href='https://vimeo.com/user63777007'>Paul Borawski</a> on <a href='https://vimeo.com'>Vimeo</a>.</p>" })
        ]),
      ]),
      h('.stopIt.row.box', [
        h('.col-lg-12.text-center', [
          h('hr.tagline-divider'),
          h('h2.intro-text.text-center', 'Alyson Julia Borawski and Thomas Joshua Esposito'),
          h('hr.tagline-divider'),
          h('img.img-responsive.img-border.img-left', {src:'/img/alytj.jpeg'}),
          h('hr.tagline-divider.visible-xs'),
          h('p', 'In January of 2006, TJ and Aly met on a chairlift ride at Heavenly Mountain Resort. They have been enjoying the ride ever since.'),
          h('p', 'The main wedding page can be found'),
          h('a.hear', {
            href:'https://www.theknot.com/us/aly-borawski-and-tj-esposito-nov-2016'},
            '-here-'),
          h('br'),
          h('br'),
          h('hr.tagline-divider'),
          h('h2.intro-text.text-center', 'Please leave a note for Aly and TJ below'),
          h('h2.intro-text.text-center', 'For problems with the messages contact Paul @ 415-246-0586'),
          h('hr.tagline-divider')
        ]),
        h('.col-lg-12', [
          h('.form-group', [
            h('label', 'message'),
            h('textarea.form-control')
          ]),
          h('.form-group', [
            h('label', 'name'),
            h('input.form-control')
          ]),
          h('button.leavemsg.btn.btn-default', {
            click:function (e) {
              console.log(e);
            }
          },'Submit')
        ]),
      ]),
      h('.stopIt.row.box', [
        h('.col-lg-12', state.msgs.map( function(msg){
          var msg = msg.split(':::')
          return h('div', [
            h('h4', msg[1]),
            h('p', '- ' + msg[0]),
            h('hr')
          ])
        })),
        h('#thelastthing.col-lg-12')
      ]),
    ]),
    h('footer', h('.container', h('.row', h('.col-lg-12.text-center', h('p', 'Proudly made by Paul in 2016'))))),
  ])
}
