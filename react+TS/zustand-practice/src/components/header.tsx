
import useStore from "../theme/store"


export const Header = () => {

    const{theme, toggleTheme} = useStore();

    return (
        <header className={theme}>
           <p><button onClick={toggleTheme}>버튼</button> 테마 변경</p>
        </header>
    );
} 

