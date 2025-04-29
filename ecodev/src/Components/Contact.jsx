import footerImg from '../assets/footer-bg-color.png'
import rightArrow from '../assets/right-arrow-white.png'

const Contact = () => {
  return (
    <div id='contact'>
      {/* Light Mode */}
      <div
        style={{ backgroundImage: `url(${footerImg})` }}
        className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat
        bg-[length:90%_auto] bg-center dark:hidden'
      >
        <h4 className='text-center mb-2 text-lg font-ovo'>Connect with me</h4>
        <h2 className='text-center text-5xl font-ovo'>Get in touch</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
          I,d love to hear from you! If you have any questions, comments or feedback, please use the form below.
        </p>

        <form action='' className='max-w-2xl mx-auto'>
          <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
            <input
              type='text'
              placeholder='Enter Your Name'
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
            />
            <input
              type='email'
              placeholder='Enter Your Email'
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
            />
          </div>

          <textarea
            rows={6}
            placeholder='Enter your message'
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'
          ></textarea>

          <button
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white shadow-sm rounded-md mx-auto 
          hover:bg-black duration-500'
          >
            submit now
            <img src={rightArrow} alt='' className='w-3' />
          </button>
        </form>
      </div>

      {/* Dark Mode */}
      <div
        className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat
        bg-[length:90%_auto] bg-center hidden dark:block'
      >
        <h4 className='text-center mb-2 text-lg font-ovo'>Connect with me</h4>
        <h2 className='text-center text-5xl font-ovo'>Get in touch</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
          I,d love to hear from you! If you have any questions, comments or feedback, please use the form below.
        </p>

        <form action='' className='max-w-2xl mx-auto dark:text-gray-500'>
          <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
            <input
              type='text'
              placeholder='Enter Your Name'
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkhover/50 dark:border-white/90'
            />
            <input
              type='email'
              placeholder='Enter Your Email'
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkhover/50 dark:border-white/90'
            />
          </div>

          <textarea
            rows={6}
            placeholder='Enter your message'
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkhover/50 dark:border-white/90'
          ></textarea>

          <button
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-md mx-auto 
          hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkhover/50'
          >
            submit now
            <img src={rightArrow} alt='' className='w-3' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
