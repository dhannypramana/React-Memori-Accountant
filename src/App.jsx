import { Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Home from "./Pages/Home"
import Income from "./Pages/Income.jsx";
import Expense from "./Pages/Expense.jsx";
import {useState} from "react";
import Form from "./Pages/Form.jsx";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div className={`mt-8 mb-24 md:container md:mx-auto relative top-20 ${isNavOpen && '-z-10'}`}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pemasukan" element={<Income />} />
          <Route path="/pengeluaran" element={<Expense />} />
          <Route path="/tambah" element={<Form />} />
        </Routes>
      </div>
    </>
  )
}

export default App
