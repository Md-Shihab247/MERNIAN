import { Routes, Route } from "react-router"
import PageOne from "./pages/PageOne"
import PageTwo from "./pages/PageTwo"
import PageThree from "./pages/PageThree"

function App() {

  return (
     
    <Routes>
      <Route index element={<PageOne />} />
      <Route path="page-two" element={<PageTwo />} />
      <Route path="page-three" element={<PageThree />} />
    </Routes>
    
  )
}

export default App
