//기본 설정
const express = require('express');
const app = express();
const PORT = 3456;

//정적 파일
// app.use(express.static(__dirname + '/public'));

//라우팅
app.get('/p2p', (req, res) => {
    res.sendFile(__dirname + '/public/p2p.html');
})

//서버 실행
app.listen(PORT, () => {
    console.log(`Listen : ${PORT}`);
})