import '../menubar.css'
import Home from '../pages/home'
import About from '../pages/about';
import { Route, Routes } from "react-router-dom";
const Contents = () => {
    return (
        <div className="contents">
            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
            </Routes>
            <footer>
                푸터입니당
            </footer>
        </div>
    );
};

export default Contents