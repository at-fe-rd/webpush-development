var cluster = require('cluster');
var workers = process.env.WORKERS || require('os').cpus().length;

if (cluster.isMaster) {
  console.log('start cluster with %s workers', workers);
  for (var i = 0; i < workers; ++i) {
    var worker = cluster.fork().process;
    console.log('worker %s started.', worker.pid);
  }
  cluster.on('exit', function(worker) {
    console.log('worker %s died. restart...', worker.process.pid);
    cluster.fork();
  });
} else {
  const config = require('./config');
  const app = require('./lib/Express');

  require('dotenv').load();
  // module.parent check is required to support mocha watch
  // src: https://github.com/mochajs/mocha/issues/1912
  var mongoose = require('mongoose');
  mongoose.connect(process.env.DATABASE_URL);
  mongoose.Promise = global.Promise;
  const db = mongoose.connection;
  db.on('error', console.error.bind(123123, 'connection error:'));
  db.once('open', function callback () {
    app.listen(config.port, onStarted);
    app.on('listening', onListening);
  });
  function onStarted() {
    console.info(`Server started on port ${config.port} (${config.env})`);
  }
  
  function onError(e) {
    console.error(`ERROR: ${e}`);
  }
  
  function onListening() {
    console.info(`Server is listening on port ${config.port}`);
  }
}
  
process.on('uncaughtException', function (err) {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
  console.error(err.stack)
  process.exit(1)
})

