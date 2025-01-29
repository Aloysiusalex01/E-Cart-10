import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{height:'250px',marginTop:'100px'}} className='mt-5 w-full bg-violet-600
     text-white p-4'>
      <div className='flex justify-between p-4'>
        <div style={{width:'400px'}} className='intro'>
          <h5 className='text-xl font-bold'> <i className='fa-solid fa-truck-fast me-1'></i>E Cart</h5>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta at explicabo aliquam 
            minima mollitia repellendus.</p>
            <p>Code Licensed Luminar,Docs CC BY 3.0</p>
            <p>Currently v5.3.2</p>
        </div>
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Links</h5>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing Page</Link>
          <Link to={'/Home'} style={{textDecoration:'none', color:'white'}}>Home Page</Link>
          <Link to={'/History'} style={{textDecoration:'none', color:'white'}}>Watch History Page</Link>
          </div>
          <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Guides</h5>
           <a href="https://react.dev/" style={{textDecoration:'none', color:'white'}} target='_blank'> React</a>
           <a href="https://react-bootstrap.netlify.app/" style={{textDecoration:'none', color:'white'}} target='_blank' >React Bootstrap</a>
           <a href="https://reactrouter.com/" style={{textDecoration:'none', color:'white'}} target='_blank' >React Router</a>
          </div>
          <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Contact Us</h5>
          <div className='flex'>
           <input type="text" placeholder='Enter your email here....' className='rounded p-1 text-black' />
           <button className='btn btn-info ms-2'><i class="fa-solid fa-right-long"></i></button>
          </div>
          <div className='icons flex justify-between mt-3' >
            <a href="https://en.wikipedia.org/wiki/Twitter" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-twitter"></i></a>
            <a href="https://en.wikipedia.org/wiki/Instagram" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-instagram"></i></a>
            <a href="https://en.wikipedia.org/wiki/Twitter" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-whatsapp"></i></a>
            <a href="https://en.wikipedia.org/wiki/Twitter" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-facebook"></i></a>
            <a href="https://en.wikipedia.org/wiki/Twitter" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-solid fa-phone"></i></a>
            <a href="https://en.wikipedia.org/wiki/Twitter" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-linkedin"></i></a>

          </div>
          </div>
        </div>
         <p className='text-center mt-3 text-white'>Copyright &copy; May 2024 Batch,E Cart,Built With React.</p>
      </div>
    
  )
}

export default Footer