import userImg from '../assets/user-img.png'
import codeIcon from '../assets/code-icon.png'
import codeIcon2 from '../assets/code-icon-dark.png'
import edu from '../assets/edu-icon.png'
import edu2 from '../assets/edu-icon-dark.png'
import project from '../assets/project-icon.png'
import project2 from '../assets/project-icon-dark.png'
import vscode from '../assets/vscode.png'
import firebase from '../assets/firebase.png'
import mongo from '../assets/mongodb.png'
import git from '../assets/git.png'
import circular from '../assets/circular-text.png'
import devIcon from '../assets/dev-icon.png'

const About = () => {
  return (
   
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
          <h2 className='text-center text-5xl font-ovo'>About me</h2>

          <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='max-w-max mx-auto relative'>
              <img src={userImg} alt="" className='w-64 sm:w-80 rounded-md max-w-none'/>

              <div className='bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full 
              translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.30)] flex items-center
              justify-center'>
                <img src={circular} alt="" className="w-full spin-slow"/>
                <img src={devIcon} alt="" className='w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
              </div>

            </div>

            <div className='flex-1'>
              <p className='mb-10 max-w-1.5xl font-ovo'>
                I am an experienced software developer with 1year professsional 
                expertise in the field. Throughout my career, I have had experience working, practicing 
                and using programming languages like javascript python next.js and frame works like React and django 
                for my personal project and course practices.
              </p>

              <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lighthover
                hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]  dark:border-white dark:hover:shadow-white
                dark:hover:bg-[#2a004a]/50 '>
                  <img src={codeIcon} alt="" className='w-7 mt-3 dark:hidden'/>
                  <img src={codeIcon2} alt="" className='w-7 mt-3 hidden dark:block'/>
                  <h3 className='my-4 font-semibold text-gray-700  dark:text-white'>Languages</h3>
                  <p className='text-gray-600 text-sm  dark:text-white'>
                    javascript, typscript, React js, [MERN-STACK], Node js
                  </p>
                </li>

                <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lighthover
                hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] dark:border-white dark:hover:shadow-white
                dark:hover:bg-[#2a004a]/50 '>
                  <img src={edu} alt="" className='w-7 mt-3 dark:hidden'/>
                  <img src={edu2} alt="" className='w-7 mt-3 hidden dark:block'/>
                  <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Education</h3>
                  <p className='text-gray-600 text-sm dark:text-white'>
                    Undergraduate in Industrial physics 
                  </p>
                </li>

                <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lighthover
                hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]  dark:border-white dark:hover:shadow-white
                dark:hover:bg-[#2a004a]/50 '>
                  <img src={project} alt="" className='w-7 mt-3 dark:hidden'/>
                  <img src={project2} alt="" className='w-7 mt-3 hidden dark:block'/>
                  <h3 className='my-4 font-semibold text-gray-700  dark:text-white'>Projects</h3>
                  <p className='text-gray-600 text-sm  dark:text-white'>
                   Built over 5 projects
                  </p>
                </li>

                
              </ul>

              <h4 className='my-6 text-gray-700 font-ovo dark:text-white/80'>
                Tools i use
              </h4>

              <ul className='flex items-center gap-3 sm:gap-5 animate-bounce'>
                <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                  <img src={vscode} alt="" className='w-5 sm:w-7'/>
                </li>

                <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                  <img src={firebase} alt="" className='w-5 sm:w-7'/>
                </li>

                <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                  <img src={mongo} alt="" className='w-5 sm:w-7'/>
                </li>

                <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                  <img src={git} alt="" className='w-5 sm:w-7'/>
                </li>
              </ul>

            </div>
          </div>
          
        </div>
  
  )
}

export default About