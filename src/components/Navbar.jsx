

const Navbar = () => {
  return (
  <nav className='flex justify-between px-2 primary'>
    <span className='font-extrabold'>iTask</span>
    <ul className='flex gap-5'>
      <li className='cursor-pointer duration-200 transition-all hover:font-bold'>Home</li>
      <li className='cursor-pointer duration-200 transition-all w-20 hover:font-bold'> Your Tasks</li>
    </ul>
    
  </nav>
  )
}

export default Navbar
