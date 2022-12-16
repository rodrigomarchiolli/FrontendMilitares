import { useState } from "react";
import { ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider} from "@mui/material";
import { Routes, Route} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar"
import Dashboard from "./scenes/dashboard";
import Aposentadoria from "./scenes/aposentadoria";
import Alocacao from "./scenes/alocacao";
import RemovePrs from "./scenes/removeprs";
import Form from "./scenes/form";
// import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import EditPerson from "./scenes/editperson";
import SelectedEditPerson from "./scenes/editperson/selected";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  

  return ( 
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar isSidebar={isSidebar}/>
          <main className="content">
            <Topbar setIsSidebar ={setIsSidebar}/>
            <Routes>
              <Route path ="/" element ={<Dashboard/>}/>
              <Route path ="/aposentadoria" element ={<Aposentadoria/>}/>
              <Route path ="/alocacao" element ={<Alocacao/>}/>
              <Route path ="/removeprs" element ={<RemovePrs/>}/>
              <Route path ="/form" element ={<Form/>}/>
              {/* <Route path ="/calendar" element ={<Calendar/>}/> */}
              <Route path ="/faq" element ={<FAQ/>}/>
              <Route path ="/bar" element ={<Bar/>}/>
              <Route path ="/pie" element ={<Pie/>}/>
              <Route path ="/editperson" element ={<EditPerson/>}/>
              <Route path ="/selectedEditPerson" element ={<SelectedEditPerson/>}/>
            </Routes>
          </main>
        </div> 
      </ThemeProvider>   
    </ColorModeContext.Provider>
 
  );
}

export default App;
