import Home from './pages/home'
import About from './pages/about';
import Menubar from './menu/menubar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menubar />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
