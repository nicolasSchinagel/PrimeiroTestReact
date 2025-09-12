import Index from "./pages/index.jsx";
import Musics from "./pages/musics.jsx";
import Dances from "./pages/dances.jsx";
import More from "./pages/more.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App(){
return(
   <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/musics" element={<Musics />} />
        <Route path="/dances" element={<Dances />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </Router>
    
);
}
export default App
