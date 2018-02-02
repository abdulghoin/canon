const express = require('express'),
      path = require('path'),
      PORT = process.env.PORT || 3030

// Create our app
const app = express();

app.use(function (req, res, next) {
  if (req.header['x-forwarded-proto'] === 'https') {
    res.redirect('http://'+ req.hostname + req.url);
  } else {
    next();
  }
})

app.use(express.static('src'));

app.get('/api', (req, res)=>{
  res.send('api')
})

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'src', 'index.html'))
})

app.listen(PORT, ()=>{
  console.log('Server is up on port ' + PORT);
});
