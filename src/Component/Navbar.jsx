import { NavLink, useNavigate } from "react-router-dom"
import MemoriLogo from "../assets/images/memori.png"
import PersonIcon from "../assets/svg/person-circle.svg"
import HamburgerIcon from "../assets/svg/hamburger.svg"

const Navbar = ({isNavOpen, setIsNavOpen}) => {
  const navigate = useNavigate()

  const handleNav = (path) => {
    navigate(path)
    setIsNavOpen(false)
  }

  return(
    <div className="border shadow border-sky-500 bg-sky-500 px-2 md:px-16 flex justify-between items-center fixed w-full">
      <div className="flex justify-center items-center">
        <NavLink to="/">
          <img className="w-20" src={MemoriLogo} alt="LogoMemori" />
        </NavLink>
        <h4 className="text-white cursor-default">Memori</h4>
      </div>
      <div className="hidden md:block text-white">
        <ul className="flex gap-3">
          <button onClick={() => handleNav('/')} className="hover:bg-sky-500 hover:rounded-md py-2 px-4 w-full text-left">Home</button>
          <button onClick={() => handleNav('/pemasukan')} className="hover:bg-sky-500 hover:rounded-md py-2 px-4 w-full text-left">Pemasukan</button>
          <button onClick={() => handleNav('/pengeluaran')} className="hover:bg-sky-500 hover:rounded-md py-2 px-4 w-full text-left">Pengeluaran</button>
        </ul>
      </div>
      <div className="flex pr-4">
        <img src={PersonIcon} alt="PersonIcon" className="w-5 hidden md:block" />
        <p className="text-white ms-1 hidden md:block">Dhanny Adhi Pramana</p>
      </div>
      <nav className="flex pr-4 md:hidden">
        <button onClick={() => setIsNavOpen(prev => !prev)}>
          <img className="w-8" src={HamburgerIcon} alt="HamburgerIcon" />
        </button>
        <div className={`bg-sky-600 rounded-md shadow-xl absolute left-10 top-14 right-7 px-5 py-3 ${isNavOpen ? 'block z-10' : 'hidden'}`}>
          <ul className="text-white">
            <button onClick={() => handleNav('/')} className="hover:bg-sky-500 hover:rounded-md py-2 px-4 w-full text-left">Home</button>
            <button onClick={() => handleNav('/pemasukan')} className="hover:bg-sky-500 hover:rounded-md py-2 px-4 w-full text-left">Pemasukan</button>
            <button onClick={() => handleNav('/pengeluaran')} className="hover:bg-sky-500 hover:rounded-md py-2 px-4 w-full text-left">Pengeluaran</button>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
