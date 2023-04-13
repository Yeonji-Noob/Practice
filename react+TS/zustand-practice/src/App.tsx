import "./scss/_main.scss"

import {Header} from "./components/header"
import {Content} from "./components/Content"
import {Footer} from "./components/Footer"
import {Button} from "./components/button"




const App:React.FC = () => {

  return (
    <div className="Container">
      <Header></Header>
      <Content/>
      <Footer/>
      <Button></Button>
    </div>
  );
}

export default App;
