import {
  HiOutlineHome,
  HiVideoCamera,
  HiMusicalNote,
  HiUserGroup,
  HiCircleStack,
  HiOutlineClock,
  HiRectangleStack,
  HiClock,
  HiArrowDown,
} from 'react-icons/hi2'
import {TbFishHook} from 'react-icons/tb'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  // Early return pattern 👇
  if (!isMenuOpen) return null
  return (
    <div className='px-5 pb-5 col-span-1 rounded-md shadow-lg'>
      <ul className='sidebar-items'>
        <Link to='/'>
          <li className='sidebar-item'>
            <HiOutlineHome className='sidebar-icon' /> Home
          </li>
        </Link>
        <Link to='/usememodemo'>
          <li className='sidebar-item'>
            <TbFishHook className='sidebar-icon' /> useMemo Hook Demo
          </li>
        </Link>
        <Link to='/userefdemo'>
          <li className='sidebar-item'>
            <TbFishHook className='sidebar-icon' /> useRef Hook Demo
          </li>
        </Link>
        <li className='sidebar-item'>
          <HiUserGroup className='sidebar-icon' />
          Subscriptions
        </li>
        <li className='sidebar-item'>
          <HiVideoCamera className='sidebar-icon' />
          Originals
        </li>
        <li className='sidebar-item'>
          <HiMusicalNote className='sidebar-icon' />
          YouTube Music
        </li>
      </ul>
      <ul className='sidebar-items'>
        <li className='sidebar-item'>
          <HiRectangleStack className='sidebar-icon' />
          Library
        </li>
        <li className='sidebar-item'>
          <HiOutlineClock className='sidebar-icon' />
          History
        </li>
        <li className='sidebar-item'>
          <HiCircleStack className='sidebar-icon' />
          Your Videos
        </li>
        <li className='sidebar-item'>
          <HiVideoCamera className='sidebar-icon' />
          Your Movies
        </li>
        <li className='sidebar-item'>
          <HiClock className='sidebar-icon' />
          Watch Later
        </li>
        <li className='sidebar-item'>
          <HiArrowDown className='sidebar-icon' />
          Downloads
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
