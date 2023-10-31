import { Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Home from "./Pages/Home"
import Records from "./Pages/Records.jsx";
import Form from "./Pages/Form.jsx";

const App = () => {

  return (
    <>
      <Navbar />
      <div className={`mt-28 mb-8 md:container md:mx-auto`}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/records" element={<Records />} />
          <Route path="/records/add" element={<Form />} />
        </Routes>
      </div>
    </>
  )
}

export default App
