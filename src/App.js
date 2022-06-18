import './App.css';
import Navigation from './Navigation';
import Container from './Container';
import { useState } from 'react';
function App() {
  const [menu,setmenu]=useState(false)
  const HandleMenu=(params)=>{
    setmenu(params)
  }
  // menubarState determiner if the navigation icon is a menu or a cancel icon
  const[menubarState,setmenubarState]=useState(true)
  // function below controls the menubar state
   const HandleMenubarState=(param)=>{
        setmenubarState(param)
    }
  return (
    <div className="App">
      <div>
          <Navigation HandleMenubarState={HandleMenubarState} menubarState={menubarState} HandleMenu={HandleMenu}/>
          <Container  HandleMenubarState={HandleMenubarState} HandleMenu={HandleMenu} menu={menu}/>
        </div>
    </div>
    
  );
}

export default App;
