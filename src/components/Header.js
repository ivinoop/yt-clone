import {
  HiBars3BottomLeft,
  HiOutlineVideoCamera,
  HiOutlineBell,
  HiOutlineUserCircle,
  HiMagnifyingGlass,
} from 'react-icons/hi2'
import Logo from '../../public/img/yt-logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { useEffect, useState } from 'react'
import { YT_SEARCH_API } from '../utils/config'
import { cachedResults } from '../utils/searchSlice'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const dispatch = useDispatch()

  const searchCache = useSelector((store) => store.search)

  const getSearchSuggestions = async () => {
    const suggestionsData = await fetch(YT_SEARCH_API + searchQuery)
    const suggestionsJson = await suggestionsData.json()
    const suggestionsDataJson = suggestionsJson[1]
    setSuggestions(suggestionsDataJson)

    // Update cache
    dispatch(
      cachedResults({
        [searchQuery]: suggestionsDataJson,
      })
    )
  }

  useEffect(() => {
    // make API call after every key press
    // but if the difference b / w 2 API calls is < 200ms, then decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestions()
      }
    }, 200)
    // Clear the timer (component unmount each time when component is about to re-render)
    return () => {
      clearInterval(timer)
    }
  }, [searchQuery])

  // Cycle of events 👇

  /**
   * key = n
   *  - render the component
   *  - and then call useEffect
   *  - start timer => make api call after 200ms
  
   * 
   * key = na
   *  - re-render the component
   *  - and calls useEffect again, since the dependency array is searchQuery
   *  - start timer again => make api call after 200ms
   * 
   * 
   *  - if another key is pressed within 200ms
   * key = nama  
   *    - destroy the component(useEffect return method)
   *    - re-render the component
   *    - call useEffect()
   *    - start timer => make API call after 200ms
   * 
   * if no key press happens after 200ms, then the api call happens automatically
   * 
   */

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }
  return (
    <>
      <header className='py-2 px-5 shadow-md sticky top-0 bg-white z-30'>
        <nav className='grid grid-flow-col items-center p-2'>
          <div className='flex items-center col-span-1'>
            <HiBars3BottomLeft
              className='cursor-pointer h-6 w-6'
              onClick={() => handleToggleMenu()}
            />
            <a href='/' className='flex items-center ml-6'>
              <img
                // src={Logo}
                src='https://cdn.freebiesupply.com/logos/large/2x/youtube-logo-png-transparent.png'
                alt='logo'
                className='object-cover h-8 cursor-pointer rounded-xl'
              />
            </a>
            {/* <a href='/'>
            <h1 className='font-bold text-xl'>YouTube</h1>
          </a> */}
          </div>
          <div className='col-span-5'>
            <div className='flex'>
              <input
                className='border border-slate-400 rounded-l-full w-full p-2 focus:outline-none relative'
                type='text'
                placeholder='Search'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
              />
              <button className='bg-slate-100 border border-slate-400 border-l-0 rounded-r-full cursor-pointer'>
                <HiMagnifyingGlass className='w-12' />
              </button>
            </div>
          </div>
          <div className='flex justify-around items-center col-span-1 ml-2 bg-slate-200 rounded-full py-1'>
            <HiOutlineVideoCamera className='nav-right-icon' />
            <HiOutlineBell className='nav-right-icon' />
            <HiOutlineUserCircle className='nav-right-icon' />
          </div>
        </nav>
      </header>
      {showSuggestions && (
        <ul className='bg-white w-[700px] rounded-b-lg rounded-t-md overflow-y-scroll absolute border border-slate-400 left-72'>
          {suggestions &&
            suggestions.map((suggestion) => (
              <li key={suggestion} className='search-suggestions-item'>
                {suggestion}
              </li>
            ))}
        </ul>
      )}
    </>
  )
}

export default Header
