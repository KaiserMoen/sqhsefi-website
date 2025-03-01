import Main  from "./pages/main/page";
import Departments from "./pages/Departments/page";
import Facilities from "./pages/Facilities/page";
import Contact from "./pages/Contact/page";
export default function Home() {
  return ( 
  <div>
    <Main/>
    <Departments/>
    <Facilities/>
    <Contact/>
  </div>
  );
  }