import './App.css';
import Navigation from './Navigation';
import Container from './Container';
import { useState } from 'react';
function App() {
  const [menu,setmenu]=useState(false)
  const HandleMenu=(params)=>{
    setmenu(params)
  }
  return (
    <div className="App">
      <div>
          <Navigation HandleMenu={HandleMenu}/>
          <Container menu={menu}/>
        </div>
    </div>
    
  );
}

export default App;
