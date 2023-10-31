import {NavLink, useNavigate} from "react-router-dom"
import MemoriLogo from "../assets/images/memori.png"
import PersonIcon from "../assets/svg/person-circle.svg"
import HamburgerIcon from "../assets/svg/hamburger.svg"
import {useEffect, useRef, useState} from "react";

const Navbar = () => {
  const navigate = useNavigate()
  const navRef = useRef(null)
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNav = (path) => {
    navigate(path)
    setIsNavOpen(false)
  }

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsNavOpen(false)
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [])

  return (
    <div
      className="border shadow border-sky-500 bg-sky-500 px-2 md:px-16 flex justify-between items-center fixed w-full">
      <div className="flex justify-center items-center">
        <NavLink to="/">
          <img className="w-20" src={MemoriLogo} alt="LogoMemori"/>
        </NavLink>
      </div>
      <div className="hidden md:block text-white">
        <ul className="flex gap-3">
          <button onClick={() => handleNav('/')}
                  className="hover:bg-sky-500 hover:rounded-md py-2 px-4 w-full text-left">Home
          </button>
          <button onClick={() => handleNav('/records')}
                  className="hover:bg-sky-500 hover:rounded-md py-2 px-4 w-full text-left">Records
          </button>
        </ul>
      </div>
      {/*<div className="flex pr-4">*/}
      {/*  <img src={PersonIcon} alt="PersonIcon" className="w-5 hidden md:block"/>*/}
      {/*  <p className="text-white ms-1 hidden md:block">Dhanny Adhi Pramana</p>*/}
      {/*</div>*/}
      <nav className="flex pr-4 md:hidden" ref={navRef}>
        <button onClick={() => setIsNavOpen(!isNavOpen)}>
          <img className="w-8" src={HamburgerIcon} alt="HamburgerIcon"/>
        </button>
        <div
          className={`bg-sky-600 rounded-md shadow-xl absolute left-10 top-14 right-7 px-5 py-3 transition-all duration-500 ease-in-out ${isNavOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}`}>
          <ul className="text-white">
            <button onClick={() => handleNav('/')}
                    className="hover:bg-sky-500 hover:rounded-md py-2 px-4 w-full text-left">Home
            </button>
            <button onClick={() => handleNav('/records')}
                    className="hover:bg-sky-500 hover:rounded-md py-2 px-4 w-full text-left">Records
            </button>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
