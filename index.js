var express = require('express');
var db = require('./db');
var app = express();


app.set('port', (process.env.PORT || 5000));

app.use('/', require('./controllers/main'));

var url = 'mongodb://yevayu:yaj3ecbG1aOpwYsjKl5p7vtT0S72RnzDK5xcTctj12PD1gXrx8I2zUYwEVwghjntalGzxkhUvBhF9lk9xOlwyA==@yevayu.documents.azure.com:10255/?ssl=true';
console.log('Initiating connection...');
db.connect(url, function(err, db) {
  if (err) {
    console.log('Error connecting to server');
    process.exit(1);
  } else {
    app.listen(app.get('port'), function() {
      console.log('Node app is running on port', app.get('port'));
    });
  }
});
