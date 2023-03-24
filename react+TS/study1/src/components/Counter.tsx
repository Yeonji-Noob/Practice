//이거는 이제 hook이라고 하는 건데 

//그 중에서 useState라고 하는 훅임
//상태가 변화한 것을 리렌더링 해줌
import { useState } from "react";

/* ------------------------------------------------ */
/* ------------------------------------------------ */

// hook 쓰는 순서
/* 
import 하기 => 
(type선언하기: typescript에서만) => 
destructuring 문법으로 useState 작성하기
*/

//자식 컴포넌트에서는 뭐해야된다? type선언을 해야된다....
//typescript 껴서 그럼 ㅎㅎ

/* ------------------------------------------------ */
/* ------------------------------------------------ */

//state type 선언
interface Istate {
    counter: number
}

/* 이번에는 함수선언식으로 해봤는데, 
function 앞에 export가 붙고 
아래에 export default가 밑에 없슴 */

// 대신 부모 컴포넌트인 App에서 import 해올 때, {}로 덮어야 됨
// 안그러면 TS(2613)오류 뜸

export function Counter() {

    //useState로 관리해 줄 state의 type 설정하기
    //useState 옆에다가 <interface이름> 해주면 됨

    /* destructuring(구조분해할당) 방식으로 선언되었는데 

    간단하게 말하자면 배열 안에 있는 값을 꺼내서 
    변수에 집어넣어서 갖다쓸거라는 것임

    원래였으면 인덱스 번호 쓰는 접근으로 해야됨*/
    /* ------------------------------------------------ */
    /* ------------------------------------------------ */

    // state는 초기 상태, useState<Istate>({counter:0})에서 이 counter: 0은 화면에 그려지는 기본 상태임
    // setState는 변화하는 상태의 값임
    const [state, setState] = useState<Istate>({ counter: 0 })


    /* 변화할 상태(setState)를 함수에 담아서 설정해주기 */

    const onIncrement = () => {
        setState({
            counter: state.counter + 1
        })
    }

    const onDecrement = () => {
        setState({
            counter: state.counter - 1
        })
    }


    return (
        <div>
            <h2>카운터</h2>
            <div>
                {state.counter}
            </div>
            {/* 버튼을 누르면(onClick이벤트) 함수실행  */}
            {/* onClick 이벤트는 콜백함수를 받음 */}
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        </div>
    )

}

