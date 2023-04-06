import { useState } from "react";
import Nav from "./components/Nav";
import Main from "./pages/Main";
function App() {
  const [toggleNav,setToggleNav]=useState(false)
  const handleToggleNav=()=>{
    setToggleNav(!toggleNav)
  }
  return (
      <div className="bg-black overscroll-contain min-h-screen dart:text-white font-Montserrat dark:bg-black">
        {toggleNav?<Nav provideNavToggler={handleToggleNav}/>:''}
        {!toggleNav?<Main provideNavToggler={handleToggleNav}/>:''}
      </div>
  );
}

export default App;
