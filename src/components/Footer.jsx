import { FaGithub } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-9 px-4 md:px-0'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-15'>
            <div>
                <h3 className='text-2xl font-bold mb-4'>SignLearn</h3>
                <p className='mb-4 text-lg'>Built with React, TailwindCSS and MediaPipe</p>
                <div className='flex items-center gap-2.5'>
                          <a href="https://github.com/Manmeet-20/SignLearn" target="_blank">
                              <FaGithub className="text-lg hover:text-cyan-600 transition-all"/>
                          </a>
                    <span className="text-lg text:slate-400 ">Source Code</span>
                </div>
                      
            </div>
            <div className='md:pl-75'>
                <h3 className='text-2xl font-bold mb-4'>Quick Links</h3>
                <ul className="space-y-2">
                    <li>
                        <Link to="/" className="hover:text-cyan-600 transition-all block">Home</Link>
                    </li>
                    <li>
                        <Link to="/detect" className="hover:text-cyan-600 transition-all block">Sign Language Detection</Link>
                    </li>
                    <li>
                        <Link to="/fingerspelling" className="hover:text-cyan-600 transition-all block">Learn Fingerspelling</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='text-lg text-slate-500 mt-8 pt-8 border-t border-gray-700 text-center'>
            <p>&copy; 2025 SignLearn. All rights reserved. </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
