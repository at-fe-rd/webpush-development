const { exec } = require('child_process');
var glob = require("glob");
var fs = require("fs");
const path = require('path');
require('dotenv').load();
var mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(123123, 'connection error:'));
db.once('open', function callback () {
  console.log('Connect successful')
  var normalizedPath = require("path").join(__dirname, "seeds");
  glob.sync( './seeds/*.js' ).forEach( function( file ) {
    require( path.resolve( file ) );
  });
  // process.exit();
});

