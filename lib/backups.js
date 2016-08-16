
const join = require('path').join
const readdir = require('fs').readdir
const exec = require('child_process').exec
const schedule = require('node-schedule')


module.exports = rule => schedule.scheduleJob(rule, backup)

function backup(){
  var cwd = {cwd:join(__dirname, '..')}

  readdir(join(__dirname, '../backups'), {encoding:'utf8'}, function(err, ls) {
    var tarball = `backup${ls.length+1}.posts.tgz`
    exec(`tar -cvzf ${tarball} ${join(__dirname, '../posts')}`, cwd, (error, stdout, stderr) => {
      if (!error)
        exec(`mv ${tarball} backups/${tarball}`, cwd, (err, stdo, stde)=>{
          if (!err) console.log('another boring backup')
        })
    })
  })
}
