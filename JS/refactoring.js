//유투브 
//https://www.youtube.com/watch?v=p0YEviesgRM
//를 따라서 연습한 내용입니다.

/* 목차 
- if문쓰기
- switch문 쓰기
- 객체매핑
*/

/*------------------------------------------------------*/

// 하나의 변수에 대해 조건별로 분기를 나눠야 하는 경우
// 여러 조건을 동시에 다뤄야 하는 복잡한 경우

const naverLogin = id => {
  // 과정 생략
  return "네이버";
}
const kakaoLogin = id => {
  // 과정 생략  
  return "카카오";
}
const facebookLogin = id => {
  // 과정 생략  
  return "페이스북";
}
const googleLogin = id => {
  // 과정 생략  
  return "구글";
}

/* -------------------------------------------------------------- */
/* -------------------------------------------------------------- */

// 조건에 맞다면 해당 함수를 호출하고, 도메인과 아이디를 반환하는 함수

/* const socialLogin = (where, id) => {
  let domain;

  if (where === "naver") {
    domain = naverLogin(id);
  } else if (where === "kakao") {
    domain = kakaoLogin(id);
  } else if (where === "facebook") {
    domain = facebookLogin(id);
  } else if (where === "google") {
    domain = googleLogin(id);
  }

  return `${domain} ${id}`;

} */

// console.log(socialLogin("naver", "YJ"));
// console.log(socialLogin("kakao", "YJ"));
// 네이버 YJ
// 카카오 YJ

/* -------------------------------------------------------------- */
/* -------------------------------------------------------------- */
/* 
조건문은 주어진 조건식에 따라 코드 블록(블록문)의 실행을 결정함 
(조건식 == 불리언 값으로 평가될 수 있는 표현식)
*/

// 자바스크립트는 if ... else문과 switch문으로 두가지 조건문을 제공함




// 위의 if문이 들어간 코드도 switch문으로 바꿀 수 있다.


/* const socialLogin = (where, id) => {
  let domain;

  switch (where) {

    case "naver":
      domain = naverLogin(id);
      break;
    case "kakao":
      domain = kakaoLogin(id);
      break;
    case "facebook":
      domain = facebookLogin(id);
      break;
    case "google":
      domain = googleLogin(id);
      break;

  }

  return `${domain} ${id}`;

} */


//그러나 이런 조건문들은 가독성이 떨어짐
// 또한 switch문의 break문이 거슬린다.

// 그래서 되도록이면 조건문을 쓰지 않는 방향으로 리팩토링을 해보자.


/* -------------------------------------------------------------- */
/* -------------------------------------------------------------- */


// 먼저 다른 함수로 빼서 호출 후 리턴
// 이러면 switch문에서 break문을 생략할 수 있다

/* const executeLogin = (where, id) => {
  switch (where) {

    case "naver":
      return naverLogin(id);
    case "kakao":
      return kakaoLogin(id);
    case "facebook":
      return facebookLogin(id);
    case "google":
      return googleLogin(id);

  }
}
const socialLogin = (where, id) => {

  let domain = executeLogin(where, id);
  return `${domain} ${id}`;

} */

// case가 return으로 빠졌기 때문에 객체화도 가능하다


// 데이터 부분 (객체)
const SocialLoginMap = {
  naver: naverLogin,
  kakao: kakaoLogin,
  facebook: facebookLogin,
  google: googleLogin,
}

// 실제 동작하는 함수 부분
const socialLogin = (where, id) => {

  const domain = SocialLoginMap[where](id);
  return `${domain} ${id}`;

}

// 객체 + 함수
//객체 매핑으로 앞서 조건문들보다 깔끔하게 정리가 되었고,
//if...else를 쓰는 것 보다 성능이 좋음

console.log(socialLogin("naver", "YJ"));
console.log(socialLogin("kakao", "YJ"));