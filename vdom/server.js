const readFileSync      = require('fs').readFileSync
const writeFile         = require('fs').writeFile
const stylus            = require('stylus')
const join              = require('path').join

styl()
function styl() {
  stylus(readFileSync(join(__dirname, 'p/s.styl'), 'utf8'))
    .include(join(__dirname, 'p'))
    .render((err, css)=> writeFile(join(__dirname, 'p/s.css'), css))
}

require('browserify')()
  .add('src/main.js')
  .bundle()
  .pipe(require('fs').createWriteStream('p/dot.js'))


poopserver('p/index.html',  3000, 'text/html')
poopserver('p/dot.js',      3001, 'text/javascript')
poopserver('p/s.css',       3002, 'text/css')

function poopserver (file, port, type) {
  require('http')
    .createServer(function(req, res) {

      res.writeHead(200, { 'Content-Type': type });
      
      require('fs')
        .createReadStream(file)
        .pipe(res)
    })
    .listen(port)
}
