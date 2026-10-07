import { Route, Routes } from "react-router-dom"
import Show from "./show"
import Insert from "./insert"
function App(){
  return(
    <>
    <Routes>
      <Route index element={<Insert/>} />
      <Route path="/show" element={<Show/>} />
    </Routes>
    </>
  )
}
export default App