import profileImg from '../assets/profile-mg.png'
import hand from '../assets/hand-icon.png'
import rightArrow from '../assets/right-arrow-white.png'
import download from '../assets/download-icon.png'
import resume from '../assets/Elijah Alexander Resume.pdf'

const Hero = () => {
  return (
    <div>
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex
         flex-col items-center justify-center gap-4'>
          <img src={profileImg} alt="" className='rounded-full w-32'/>
          <h3 className='flex items-center gap-2 text-xl md:text-2xl mb-3 font-ovo'>
            Hi! I,m Elijah Alexander 
           <img src={hand} alt="" className='w-6'/>
          </h3>
          <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Fullstack developer based in Nigeria.</h1>
          <p className='max-w-2xl mx-auto font-ovo'>
            I am a Fullstack developer from Delta state, Nigeria with 1year of experience
            with high coding skills with multiple programing languages and frame works.
          </p>

          <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-8 py-3 border rounded-md bg-gradient-to-r from-[#b820e6] 
            to-[#da7d20] text-white flex items-center gap-2 animate-pulse dark:border-transparent'>
              contact me <img src={rightArrow} alt="" className='w-4'/>
            </a>

            <a href={resume} className='px-8 py-3 shadow-sm rounded-md border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
              my resume <img src={download} alt="" className='w-4 animate-bounce'/>
            </a>
            
          </div>

        </div>
    </div>
  )
}

export default Hero