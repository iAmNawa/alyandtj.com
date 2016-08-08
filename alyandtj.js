const readFileSync      = require('fs').readFileSync
const writeFile         = require('fs').writeFile
const stylus            = require('stylus')
const join              = require('path').join

const port = 9400;



var app = require('express')();

app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:true }));
app.use(require('stylus').middleware(require('path').join(__dirname, 'public')));
app.use(require('express').static('public'));

//app.get('/', function (req, res) {
//  res.send('nawascript');
//});


require('http').createServer(app).listen(port,function(){
  console.log('server is running you beeezy, on port', port)
});


//styl()
//function styl() {
//  stylus(readFileSync(join(__dirname, 'public/s.styl'), 'utf8'))
//    .include(join(__dirname, 'public'))
//    .render((err, css)=> writeFile(join(__dirname, 'public/s.css'), css))
//}

require('browserify')()
  .add('src/main.js')
  .bundle()
  .pipe(require('fs').createWriteStream('public/dot.js'))
