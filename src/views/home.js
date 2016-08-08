const h = require('virtual-dom/h')
const ee = require('../events')

module.exports = function (state) {
  return h('div', [
    h('.brand', 'Aly & TJ'),
    h('.address-bar', 'Countdown to the wedding of Alyson Julia and Thomas Joshua'),
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
        h('.collapse.navbar-collapse.timer#bs-example-navbar-collapse-1', [
          h('#clockdiv', [
            h('#clockElement', [h('span.days.clockNumber', state.days +''), ' Days']),
            h('#clockElement', [h('span.hours.clockNumber', state.hours+''), ' Hours']),
            h('#clockElement', [h('span.minutes.clockNumber', state.mins+''), ' Minutes']),
            h('#clockElement', [h('span.seconds.clockNumber', state.secs+''), ' Seconds']),
          ])
        ])
      ])
    ]),
    h('.container', [
      h('.row.box', h('.col-lg-12.text-center', [
        h('#carousel-example-generic.carousel.slide', [
          h('ol.carousel-indicators.hidden-xs', [
            h('li.generic.active', {'data-target':'#carousel-example-generic', 'data-slide-to':'0'}),
            h('li.generic', {'data-target':'#carousel-example-generic', 'data-slide-to':'1'}),
            h('li.generic', {'data-target':'#carousel-example-generic', 'data-slide-to':'2'}),
            h('li.generic', {'data-target':'#carousel-example-generic', 'data-slide-to':'3'}),
          ]),
          h('.carousel-inner', [
            h('.item.active', h('img.img-responsive.img-full', {src:'/img/one.jpg',alt:''})),
            h('.item', h('img.img-responsive.img-full', {src:'/img/two.jpg',alt:''})),
            h('.item', h('img.img-responsive.img-full', {src:'/img/three.jpg',alt:''})),
            h('.item', h('img.img-responsive.img-full', {src:'/img/four.jpeg',alt:''}))
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
      h('.row.box', [
        h('.col-lg-12.text-center', [
          h('h3', 'reminder to update other stuff')
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
      h('.row.box', [
        h('.col-lg-12', state.msgs.map( function(msg){
          var msg = msg.split(':::')
          return h('div', [
            h('h3', msg[1]),
            h('p', 'by: ' + msg[0]),
            h('hr')
          ])
        })),
        h('#thelastthing.col-lg-12')
      ]),
    ]),
    h('footer', h('.container', h('.row', h('.col-lg-12.text-center', h('p', 'Copyright © alyandtj.com 2016'))))),
  ])
}
