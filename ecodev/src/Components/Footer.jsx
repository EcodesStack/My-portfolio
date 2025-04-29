import logo from '../assets/ecodev e.png'
import logo2 from '../assets/ecodev e.png'
import mail from '../assets/mail_icon.png'
import maildark from '../assets/mail_icon_dark.png'

const Footer = () => {
  return (
    <div className='mt-20'>

      <div className='text-center'>
        <img src={logo} alt="" className='w-40 mx-auto mb-2 invert dark:hidden' />
        <img src={logo2} alt="logo" className='w-40 mx-auto mb-2 hidden dark:block'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
          <img src={mail} alt="" className='w-6 dark:hidden' />
          <img src={maildark} alt="" className='w-6 hidden dark:block' />
          elijahkylealexander@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%]
      mt-12 py-6'>
        <p>&copy; 2025 Elijah Alexander. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 animate-bounce'>
          <li><a href="https://instagram.com/ecodevstack">instagram</a></li>
          <li><a href="https://github.com/EcodesStack">GitHub</a></li>
          <li><a href="https://linkedin.com/http://linkedin.com/in/elijah-alexander-516649331">Linkedin</a></li>
        </ul>
      </div>
        
    </div>
  )
}

export default Footer