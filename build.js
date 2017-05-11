const createWriteStream = require('fs').createWriteStream

const readFileSync = require('fs').readFileSync
const writeFile = require('fs').writeFile
const watchFile = require('fs').watchFile
const render = require('stylus').render
const watch = require('fs').watch
const join = require('path').join


const cssin = join(__dirname, 'public/s.styl')
const cssout = join(__dirname, 'public/s.css')

watchFile(cssin, ()=>
  render(readFileSync(cssin, 'utf8'), { filename: 'style.css' }, (err, css)=>
    !err ? writeFile(cssout, css, 'utf8') : console.log(err) ) )

const b = require('browserify')()
  .add(join(__dirname, 'src/main.js'))
  //.transform(es6ify)
  //.transform(uglifyify)



const jsviews = join(__dirname, 'src/views')
const jsin = join(__dirname, 'src')

watch(jsviews, pressurewasher )
watch(jsin, pressurewasher )

function pressurewasher(){
  console.log('detected file change')
  const ws = createWriteStream(join(__dirname, 'dot.js'))
  b
    .bundle()
    .on('end', ()=> console.log('rebuilt vdom: dot.js') )
    .pipe(createWriteStream(join(__dirname, 'dot.js')))
}
