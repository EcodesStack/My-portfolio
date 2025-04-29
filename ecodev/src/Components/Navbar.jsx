import React, { useRef, useState } from 'react'
import logo from '../assets/ecodev e.png'
import logo2 from '../assets/ecodev e.png'
import ContactBtn from '../assets/arrow-icon.png'
import ContactBtn2 from '../assets/arrow-icon-dark.png'
import moon from '../assets/moon_icon.png'
import header from '../assets/header-bg-color.png'
import menuIcon from '../assets/menu-black.png'
import menuIcon2 from '../assets/menu-white.png'
import closeBtn from '../assets/close-black.png'
import closeBtn2 from '../assets/close-white.png'
import sun from '../assets/sun_icon.png'

const Navbar = () => {
  const sideMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);


  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  React.useEffect(() => {
    const navBar = document.querySelector('nav');
    const navLinks = document.querySelector('nav ul');

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navBar.classList.add('bg-white/50', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-[#11001f]', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white/50', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent' );
      } else {
        navBar.classList.remove('bg-white/50', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-[#11001f]', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white/50', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  function toggleTheme() {

    document.documentElement.classList.toggle('dark');

    if(document.documentElement.classList.contains('dark')) {
      localStorage.theme = 'dark'
    } else {
      localStorage.theme = 'light'
    }
  }
  
  return (
    <div>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <img src={header} alt="" className='w-full'/>
      </div>

       <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <img src={logo} alt="logo" className='w-40 cursor-pointer mr-14 invert dark:hidden'/>
        <img src={logo2} alt="logo" className='w-40 cursor-pointer mr-14 hidden dark:block'/>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-md px-12 py-3 bg-white/50 shadow-sm bg-opacity-50 font-ovo dark:border dark:border-white/50 dark:bg-transparent'>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">My work</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>

      <div className='flex items-center gap-4'>
        <button onClick={toggleTheme}>
          <img src={moon} alt="" className='w-6 dark:hidden'/>
          <img src={sun} alt="" className='w-6 hidden dark:block'/>
        </button>

         <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 dark:border shadow-sm rounded-md ml-4 font-ovo dark:border-white/50'>
            Contact 
            <img src={ContactBtn} alt="Contact Button" className='w-3 animate-pulse dark:hidden' />
            <img src={ContactBtn2} alt="Contact Button Dark" className='w-3 animate-pulse hidden dark:block' />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <img src={menuIcon} alt="" className='w-6 dark:hidden'/>
            <img src={menuIcon2} alt="" className='w-6 hidden dark:block'/>
          </button>

      </div>

      <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed ${menuOpen ? 'right-0' : '-right-64'} top-0 bottom-0 w-64 z-50 h-80 bg-rose-50 transition duration-500  font-ovo rounded-2xl dark:bg-[#2a004a] dark:text-white`}>

        <div className='absolute right-6 top-6' onClick={closeMenu}>
          <img src={closeBtn} alt="" className='w-5 cursor-pointer dark:hidden'/>
          <img src={closeBtn2} alt="" className='w-5 cursor-pointer hidden dark:block'/>
        </div>

        <li><a href="#top" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About me</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#work" onClick={closeMenu}>My work</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>

      </ul>
        
       </nav>
    </div>
  )
}

export default Navbar