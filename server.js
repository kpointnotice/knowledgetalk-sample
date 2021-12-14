//기본 설정
const express = require('express');
const https = require('https');
const fs = require('fs');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

//ssl 설정
const options = {
    key: fs.readFileSync(process.env.SSL_KEY),
    cert: fs.readFileSync(process.env.SSL_CERT),
    ca: fs.readFileSync(process.env.SSL_CA),
    passphrase: process.env.SSL_PASSPHRASE
  }

//라우팅
app.get('/p2p', (req, res) => {
    res.sendFile(__dirname + '/public/p2p.html');
})

//서버 실행
https.createServer(options, app).listen(process.env.PORT, () => {
    console.log(`Listen : ${process.env.PORT}`);
})