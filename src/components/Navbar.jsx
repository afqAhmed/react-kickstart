import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='f-container place-content-between py-6'>
      <Link className='text-2xl' to='/'>My Money</Link>
      <div className='flex'>
        <Link className='px-4 text-2xl' to='/signup'>Signup</Link>
        <Link className='px-4 text-2xl' to='/login'>Login</Link>
      </div>
    </nav>
  )
}

export default Navbar
