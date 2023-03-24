// (3/23일 첫 작성)
// https://ddeck.tistory.com/m/56  글의 예제를 따라서 공부했음
// 공부 차원에서 주석을 많이 달아놨음

/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */


// 부모 컴포넌트 (props를 전달할거임)
/* component 3개로 구성된 예제니까 차근차근 해보자*/

import Profile from '../src/components/Profile' ;
import {Counter} from '../src/components/Counter' ; 
import {TodoList} from '../src/components/TodoList' ;


// 함수형 컴포넌트로 만들거임
// function ~ 해서 원래 방식(함수 선언식)으로 해도 되고
// 화살표 함수로 해도 됨 나는 화살표함수(함수 표현식) 쓸거임

const App = () => {
  return (
    <div className="App">
      {/* props로 값을 전달한 것임 */}
      {/* 기본 dom태그 외에 내가 이름 정해서 태그 만든것을 사용자정의컴포넌트라고 함 */}
      {/* 컴포넌트의 이름은 항상 대문자로 시작함!!!!!!!! */}
      <Profile name='연지 ' job='자택경비원' />
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
