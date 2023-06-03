// node 모듈 시스템 공부

const fs = require('fs');

const requestHandler = (req, res) => {

  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    /* GET 과 POST (HTTP methods)
     GET요청은 링크를 클릭하거나 URL를 입력하면 자동으로 전송됨
     POST는 해당 양식을 생성, 직접 설정해줘야 함
  
     전송 버튼을 누르면 /message로 POST 요청을 보내는 설정
    */
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');

    //  다른 res.write나 res.setHeader를 호출하지 않기 위해 res.end
    return res.end();
  }
  /* 
  User를 /로 리디렉션 해보기
  새 파일을 생성하여 입력한 메세지를 저장
   */
  if (url === '/message' && method === 'POST') {
    const body = [];

    /* 
    if문으로 넘어갔다고 해서 
    밑의 이벤트리스너 콜백함수들이 
    바로 실행되는 것은 아님!! (비동기적 실행을 이해하자)
    */
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      // 사용자가 입력한 값을 txt 파일로 저장할 거임
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {

        // 302 코드는 경로 재지정을 의미함
        res.statusCode = 302;
        res.setHeader('Location', '/');

        return res.end();

      });

    });

  }

  // html 코드와 응답을 전송
  res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();

};

// 함수 모듈 내보내기 방법은 2가지가 있음
// 그냥 내보내는거랑 객체로 내보내기 
module.exports = requestHandler;

//객체로 내보내는 방법 
// module.exports = {
//   handler: requestHandler,
//   someText: 'some hard coded text'
// };

// 메소드로 내보내기 (위의 객체로 내보내는거와 거의 동일)
// module.exports.handler = requestHandler;
// module.exports.someText = 'some hard coded text';

// ** 앞의 module은 생략해도 됨. exports~ 부터 써도 됨! 
// node.js 단축키임 ㅋㅋ

///////////////////////////////////////////////////////


// node.js는 논블로킹 방식으로 실행됨