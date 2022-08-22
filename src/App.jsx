import React from "react";
import {
	BrowserRouter as Router, Route,
	Routes
} from "react-router-dom";
import { Baseview } from './components/Skeleton/Baseview';
import Page404 from "./views/404";
import { Contact } from "./views/Contact";
import { Home } from "./views/Home";
import { ProjectDemo } from "./views/ProjectDemo";
const App = () => {

  return (
    <Router>
		<Baseview>
      <Routes>
        {/* <Route path="/test2" element={<Route1/>}/> */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project/:name" element={<ProjectDemo/>}/>
        <Route path="/*" element={<Page404/>}/>
      </Routes>
		</Baseview>
    </Router>
  );
}

export default App;
