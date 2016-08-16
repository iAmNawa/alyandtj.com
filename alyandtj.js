const readFileSync      = require('fs').readFileSync
const writeFile         = require('fs').writeFile
const stylus            = require('stylus')
const join              = require('path').join
const schedule          = require('node-schedule')
const backup            = require('./lib/backups')
const port              = 9400;

var db = require('level')('./posts')
var app = require('express')();

app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:true }));
app.use(require('stylus').middleware(require('path').join(__dirname, 'public')));
app.use(require('express').static('public'));

app.get('/msgs', function (req, res) {
  var allmsgs = []
  db.createReadStream()
  .on('data', function (data) {
    allmsgs.push(data.value)
  })
  .on('error', function (err) {
    console.log('Oh my!', err)
  })
  .on('close', function () {
    console.log('Stream closed')
  })
  .on('end', function () {
    console.log('Stream closed');
    res.json({
      all:allmsgs
    })
  })
});


app.post('/newmessage', function (req, res) {
  console.log(req.body);
  db.put(String(Date.now()), req.body.name + ':::' + req.body.msg)
  res.json({nice:'nawascript'});
});


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


var rule = new schedule.RecurrenceRule()
rule.hour = 4
backup(rule)




//// some deleting
db.createReadStream().on('data', function(data){
  console.log(data)
})
//db.del('1470639167557')
// mookie
