/* TO DO LIST 기본 기능 구현*/
// Item 추가
// Item 삭제


//이번에는 훅을 두개를 쓸 것임

import React from "react";
import { useState, useEffect } from "react";
import { TodoItem } from "../components/TodoItem";

// 자식컴포넌트에서 뭐해야된다??????????????
// 타입선언,,,, interface로,,


/* ------------------------------------------------ */
/* ------------------------------------------------ */

// Item의 타입
interface todoItem {
    item: string
}


interface ItodoItems {

    idx: number,
    item: string,
    isDelete: boolean
    onDelete?: Function,

}

// interface 내부에 다른 interface를 넣어서 array로 잡아줌
// list는 배열의 형식으로 잡아주는것
interface ItodoList {
    todoItems: ItodoItems[]
}

/* ------------------------------------------------ */
/* ------------------------------------------------ */


// 함수 내부에는 먼저 Hook을 써준 뒤 return값을 쓰는 것이 순서임


export function TodoList() {

    /* useState Hook */
    /* destructuring 문법으로 써주는 게 특징
    /* ------------------------------------------------ */
    // todoItem interface에서 끌고옴 (typescript)
    /* ------------------------------------------------ */
    const [todoItem, setTodoItem] = useState<todoItem>(
        // 빈 문자열로 내용을 처리해줌
        // 내용 자체를 직접 입력해서 추가할거라 그럼
        { item: '' }
    )

    // ItodoItems를 interface에서 끌고옴
    const [todoList, setTodoList] = useState<ItodoItems>(
        {
            idx: 0,
            item: '',
            isDelete: false,
        }
    )

    const [todoData, setTodoData] = useState<ItodoList>(

        {
            todoItems: [todoList]
        }

    )

    /* ------------------------------------------------ */
    /* ------------------------------------------------ */

    /* onSubmit 이벤트 핸들러 함수 만들기 */

    // arrow function (함수표현식)
    //parameter의 type을 void로 잡음

    /* 
    e 매개변수는 이벤트 객체를 의미함
    React.FormEvent<HTMLFormElement>는 이벤트 객체의 유형이고 
    <>들어간거는 typescript 환경에서 사용하기 때문에 넣어줌
    HTMLFormElement라는 하나의 'type'임
    */

    /* typescript+react 환경에서 이벤트를 처리하려면 
    이벤트의 타입을 지정해주어야 함 
    안그러면 문법 오류가 발생함
    */

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault() //페이지 전환 막는 이벤트
        setTodoList(
            {
                idx: todoList.idx + 1,
                item: todoItem.item,
                isDelete: false,
            }
        )
    }

    /* ------------------------------------------------ */
    /* ------------------------------------------------ */
    /* useEffect Hook */
    // useEffect 내부에는 콜백함수를 써준다

    useEffect(() => {

        /*  */
        setTodoItem({
            // input 창 초기화
            item: ''
        })

        // concat() 메서드를 써줌
        // 배열의 마지막 부분에 배열이 새로 추가되는 메서드임
        // push()랑 비슷함 

        /* push()는 원 배열의 값도 변함 */
        /* concat()은 원 배열의 데이터는 유지하면서 새로운 배열을 생성함 */


        /* 그래서 react에서는 concat을 씀
        데이터 원본 불변성 유지를 위해서임*/



        // concat, map, filter 메서드는 꼭 알고있기
        setTodoData({
            todoItems: todoData.todoItems.concat(todoList),
        })

    }, [todoList])


    /* ------------------------------------------------ */

    useEffect(() => {
        //console.log('todoData변경 ||', todoData)
    },[todoData])


    /* ------------------------------------------------ */
    /* ------------------------------------------------ */
    /* ------------------------------------------------ */
    
    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {

        // 변수 선언 
        // 객체.ver의 destructuring 문법
        const {name, value} = e.target
        setTodoItem (
            {item: value}
        )
    }

    // parameter의 type 정해줌 :number
    const onDelete = (idx: number) => {

        //변수의 타입을 지정해줌
        let temp2: Array<ItodoItems> = []
        
        // map 메서드 안에 콜백함수
        const deleteTodoList = todoData.todoItems.map(

            data => {

                let temp1: ItodoItems = {
                    idx: data.idx,
                    item: data.item,
                    // 삼항연산자 사용
                    isDelete: data.idx === idx ? true : false
                }

                // if-else 조건문
                if(temp2.length<1){
                    temp2 = [temp1]
                } else {
                    temp2 = temp2.concat(temp1)
                }

                /*https://ddeck.tistory.com/m/56 글을 참고했는데 이 부분에서 error가 떴음,,,
                일단은 내가 예제를 따라치면서 
                따라와서 다음번에 한번 더 복습할 때 고쳐놔야 할 거 같음 ㅠㅠ
                (3/23일 작성)  */
                setTodoData ({
                    todoItems: temp2 //temp3 으로 적혀있었으나 에러 뜸
                })

            }

        )

    }


    // TodoList 컴포넌트 정의 

    /* todoData에서 가져온 todoItems 배열을 map 함수를 사용해서 
    순회함 */

    // map() 메서드 사용
    const TodoList = todoData.todoItems.map(
        //map 내부에 콜백함수 들어감
        (data, idx) => ( 
            /* 여기서 React. ~~ 는 
            import React from "react"; 를 맨 앞에서 import안했을 경우에
            TS에러가 뜸 주의하셈 */

            // import 해온 React 컴포넌트를 커스텀 태그 컴포넌트로 불러온 것이라고 볼 수 있음
            // 그 중 Fragment를 불러온 것

            <React.Fragment key={idx}>

            {/* 에러 떴었는데 알고보니까 
            import { TodoItem } from "../components/TodoItem"; 맨 앞에다가 안해줘서 뜸 
            <> 커스텀 태그에서 오류가 나면 맨 앞의 import가 잘 됐는지 확인하자*/}
            <TodoItem 
                idx={data.idx}
                item={data.item}
                isDelete={data.isDelete}
                onDelete={onDelete}
            />
            </ React.Fragment>

        )
    )



    // return 값

    // 화면에 보여질 페이지의 구조를 써주면 됨 (html같은 역할)
    // 예제니까 열심히 위부터 순서대로 썼지만 
    // return 구조 짜는게 제일 쉬워서 제일 먼저 쓸듯?
    
    return (
        <>
            <h2>할일</h2>
            <>
                <form onSubmit={onSubmit}>
                    <input type='text' name='content' value={todoItem.item} onChange={handleInput} />
                    <button type='submit'>추가</button>
                </form>
            </>
            <>
                {TodoList}
            </>
        </>
    )

}