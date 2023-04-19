//axios를 사용하여 api를 다루는 연습을 할 거임!

import axios from 'axios';

// get: 데이터를 조회
// post: 데이터를 등록
// put: 데이터를 수정
// delete: 데이터를 제거

// axios.get(''); 이런식으로 사용함
// 데이터를 등록하고 싶다 => axios.post('');
// 데이터를 등록할 시에는 두번째 파라미터에 등록하고자 하는 정보를 넣을 수 있음

/* axios.post('/users', {

    username: 'bla'
    name: 'name'

 }); */


 // 연습용 api 주소 : https://jsonplaceholder.typicode.com/users

// 준비물이 또 필요함. useState와 useEffect임

import { useEffect, useState } from 'react';

// 상태 관리하는거는 useState로 할 것이고, 
// useEffect로 컴포넌트가 렌더링 되는 시점에 요청을 시작할 거임

// 상태는 총 3가지 종류를 다뤄야 함 
// 1. 요청 결과 2. 로딩상태 3. 에러

const Users = () => {

    const [users, setUsers] = useState<null | Array<{ id: number, username: string, name: string }>>(null); // 1번 항목
    const [loading, setLoading] = useState<boolean>(false); // 2번 항목
    const [error, setError] = useState<null>(null); // 3번 항목


    useEffect(()=>{

        const fetchUsers = async () => {


            // 요청 츄라이츄라이
            try {
                // 요청이 시작할 때 error와 users 초기화
                setError(null);
                setUsers(null);
                // loading 해줘야 하니까 로딩만 true를 주자
                setLoading(true);

                // 데이터를 꺼내오는(조회) 작업을 함
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                //
                setUsers(response.data);
            } 
            

            // catch에서 e는 error를 의미함!
            catch (e: unknown) {
                console.error(e);


                //'unknown' 형식의 인수는 'SetStateAction<null>' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

                //TS에서만 발생하는 에러인데 ㅅㅂ... 원래 매개변수에는 type이 any아니면 unknown이 들어가는데
                //막상 any안쓰려고 unknown 단순하게 넣으면 밑에서 ㅈㄹ을한다.

                // 와 class로 타입 명시할수도잇네 ㅇㅅㅇ;; 이럴 경우 컴파일 시에 안사라지고 남는다한다 개신기함

            }

            setLoading(false);
        }
    
        fetchUsers();

    }, []);


    // 어떤 화면을 띄워줄 지 정해주자

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;


return(
    <ul>

        {/* 'never' 타입 오류는 상태 변수 'users'의 타입이 null로 설정된 경우 발생합니다. 
        이 오류를 해결하려면 'users' 유형을 'null | Array<{ id: number, username: string, name: string }>>'을 사용하여 
        null 또는 사용자 개체 배열을 보유할 수 있습니다. */}
      {users.map((user: { id: number, username: string, name: string }) => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
);

}

export default Users;