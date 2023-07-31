import './App.css';
import Logo from './Logo';
import Posting from './Posting';
import Contents from './Contents';
import Buttons from './Buttons';
import Comment from './Comment';
import Reply from './Reply';


function App() {
  return (
    <>
    <img src="back.jpg" id="back"/>
    <img src="settings.jpg" id="settings"/>
    <Logo/>
    <Posting/>
    <Contents/>
    <img src="current.jpg" id="current"/>
    <Buttons/>
    <hr/>
    <Comment/>
    <Reply/>
    </>
  );
}

export default App;
