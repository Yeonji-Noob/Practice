import * as React from 'react';

// 자식 컴포넌트는 뭐부터 해야된다??????? 타입지정...
// type 지정을 위해 interface 생성
// interface는 object 형식임
interface IList {

    idx: number,
    item: string,
    isDelete: boolean,
    // function type은 f를 F로 쓰는거에 주의하셈 
    //소문자로 쓰면 TS2552 에러뜰거임
    // 이렇게 Function타입으로 지정해준 애는 함수처럼 쓸 수 있음
    // TodoItem 함수에 있음
    onDelete: Function,

}


/* ------------------------------------------------ */
/* ------------------------------------------------ */

// 컴포넌트 생성
// 함수형 컴포넌트는 뭐다??? return 값이 있어야 한다...
// return 안에는 html 구조같은게 들어가면 됨

// class형 컴포넌트는???
/* 
function 대신에 class 쓰고, extends Component 써주고
render(){} 써주면 됨
*/

// interface 해놓은 IList를 props로 가져올것
export function TodoItem(props: IList) {

    const handleDelete = () => {

        // onDelete가 함수처럼 쓰였음
        props.onDelete(props.idx)
    }



    return (
        <div>
            {props.idx !== 0 && !props.isDelete && (
                <div>
                    {props.item}
                    <button onClick={handleDelete}>
                        삭제
                    </button>
                </div>
            )}
        </div>
    )


}
