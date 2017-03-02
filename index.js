require('babel-register');

const app = require('./src/app').app,
      PORT = process.env.PORT || 8080;
      
app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});