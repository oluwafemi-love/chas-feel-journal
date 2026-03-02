import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

//  function toggleSidebar() {
//     setSidebarOpen(prev => !prev);
//   }

  return (
    <>
      <Header
        onToggleSidebar={()=>setSidebarOpen(prev => !prev)}
      />
      <Sidebar sidebarIsOpen={sidebarOpen} />
    </>
  );
}

export default App;
