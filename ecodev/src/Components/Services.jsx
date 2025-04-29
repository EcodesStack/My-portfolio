import webIcon from '../assets/web-icon.png'
import rightArrow from '../assets/right-arrow.png'
import mobileIcon from '../assets/mobile-icon.png'
import ui from '../assets/ui-icon.png'
import graphics from '../assets/graphics-icon.png'


const Services = () => {
  return (
    <div id='services' className='@container p-4 w-full px-[12%] py-10 scroll-mt-20 '>
        <h4 className='text-center mb-2 text-lg font-ovo'>What i offer</h4>
        <h2 className='text-center text-5xl font-ovo'>My Services</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
          I,m a software developer from Delta state, Nigeria
          with 1year of experience with different programing languages and frame works.
        </p>

        <div className='grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-4 gap-4 my-10'>
          <div className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer
          hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white'>

            <img src={webIcon} alt="" className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>Web Design</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
              Web development in the process of building, programming....
              <a href="" className='flex items-center gap-2 text-sm mt-5'>Read more 
                <img src={rightArrow} alt="" className='w-4'/></a>
            </p>
          </div>

          <div className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer
          hover:bg-lighthover hover:-translate-y-1 duration-500  dark:hover:bg-darkhover dark:hover:shadow-white'>

            <img src={mobileIcon} alt="" className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>Mobile App</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
              Web development in the process of building, programming....
              <a href="" className='flex items-center gap-2 text-sm mt-5'>Read more 
                <img src={rightArrow} alt="" className='w-4'/></a>
            </p>
          </div>

          <div className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer
          hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white'>

            <img src={ui} alt="" className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>UI / UX Design</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
              Web development in the process of building, programming....
              <a href="" className='flex items-center gap-2 text-sm mt-5'>Read more 
                <img src={rightArrow} alt="" className='w-4'/></a>
            </p>
          </div>

          <div className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer
          hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white'>

            <img src={graphics} alt="" className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>Graphics Design</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
              Web development in the process of building, programming....
              <a href="" className='flex items-center gap-2 text-sm mt-5'>Read more 
                <img src={rightArrow} alt="" className='w-4'/></a>
            </p>
          </div>

        </div>

    </div>
  )
}

export default Services