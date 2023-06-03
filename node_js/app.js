/*
node.js의 기본 모듈 
1. http 2. https 3. fs 4. path 5. os
*/
const http = require('http');

// routes.js 불러오기 (끝의 확장자는 생략이 가능함)

const routes = require('./routes');

// 서버에 요청이 들어올 때마다 함수를 실행
// node.js는 안의 콜백함수를 나중에 실행함 (비동기식 실행)
/** createServer 콜백함수 */
const server = http.createServer(routes);
// 만약 모듈을 객체로 내보냈다면, routes.handler 쓰면 됨


// console.log(req.url, req.method, req.headers);
//이벤트 루프를 종료 ==> process.exit();

// const url = req.url;
// const method = req.method;


// 3000은 포트 번호임
server.listen(3000);



// 필요한 내용들은 routes.js로 옮겨서 app.js는 깔끔하게 코드 몇줄로 유지