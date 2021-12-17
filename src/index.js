import express from 'express';
const https = require('https');
const http = require('http');
const fs = require('fs');

import router from './router';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'src/views');

// app.use((req, res, next) => {
//   if (req.headers['x-forwarded-proto'] == 'http') {
//     return res.redirect(301, 'https://' + req.headers.host + '/');
//   } else {
//     return next();
//   }
// });

const httpsOptions = {
  key: fs.readFileSync('security/key.pem'),
  cert: fs.readFileSync('security/cert.pem'),
  passphrase: 'YOUR@passphrase'
}

// http.createServer(app).listen(port + 5, () => console.log(`server HTTP listening in -> http://localhost:${port + 5}`));
// const server = http.createServer(httpsOptions, app)//.listen(port, () => console.log(`server HTTPS listening in -> http://localhost:${port}`));

app.use('/', router);

// console.log(http);
// console.log(https.createServer);
// console.log(app);
// console.log(httpsOptions)

app.listen(port, () => console.log(`server listening in -> http://localhost:${port}`));
