import { hover } from '@testing-library/user-event/dist/hover';
import styled from 'styled-components';

// {}는 닫힌 이후에 세미콜론을 사용하면 안되는 것으로 알고있음
//하지만 var obj={}; 같은 할당문은 예외임
//세미콜론 규칙에 대해서 다시 잘 공부해보자


const backgroundColor = {
    primary: '#1c7ed6',
    secondary: '#ae3ec9',
};

const hoverBackgroundColor = {
    primary: '#1971c2',
    secondary: '#9c36b5',
};


//TS니까 interface 설정
interface StyledButtonProps {

    //읽기 전용(readonly)속성 
    readonly variant: 'primary' | 'secondary';
}


const StyledButton = styled.button<StyledButtonProps>`
    

    background-color: ${ props =>backgroundColor[props.variant]};
    //이 부분이 좀 까다로운듯 props 전달
    // 그레이브 엑센트 안에서 js를 사용하려면 위처럼 $하고 brace를 쓰면 됨


    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 12px 24px;
    margin: 0;
    cursor: pointer;
    transition: 0.1s background-color ease-in-cut;

    &:hover {
        background-color: ${props => hoverBackgroundColor[props.variant]};
    }

`; 

export default StyledButton; 