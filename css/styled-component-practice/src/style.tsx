// 첫시작! 일단 styled를 import 한다.

import styled from 'styled-components';

//생성할 document element를 선택한다.
// ex) styled.div , styled.span 등
// 옆에 backtick을 주고, 안에다가 css style을 작성한다


const StyledButton = styled.button`

    background-color: #228be6;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 12px 24px;
    margin: 0;

`;

export default StyledButton;

// 와 ㄹㅇ진짜 컴포넌트 같음 ㅋㅋㅋㅋㅋ app.tsx로 내보내기 해보자

//근데 자동완성 안뜨는게 좀 불편하네 이거 해결할 수 있는 방법 있나 알아보자

//export 딴방식도 되나 알아보자