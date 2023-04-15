import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { findPrime } from '../utils/helper'
import { CiDark } from 'react-icons/ci'

const UseMemoDemo = () => {
  const [number, setNumber] = useState('')
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  console.log('Render...')

  // Heavy operation
  const nPrime = useMemo(() => findPrime(number), [number])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <>
      <div
        className={
          'col-span-12 border border-slate-400 rounded-md py-4 flex flex-col justify-center items-center ' +
          (isDarkTheme && ' bg-[#242B2E] text-white')
        }
      >
        <section className='flex items-center'>
          <h1 className='text-2xl text-indigo-600 mb-2 font-semibold py-2'>
            Demo for useMemo hook
          </h1>
          <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
            <CiDark
              className={
                'w-8 h-8 ml-3 bg-slate-200 px-1 rounded-md ' +
                (isDarkTheme && ' text-black')
              }
            />
          </button>
        </section>
        <div className='flex items-start'>
          <article className='text-left border border-slate-200 rounded-md p-2 w-[900px] mb-3 mr-2'>
            <p>
              This is a practical explanation for the use-case of{' '}
              <span className='bg-orange-200 p-1 rounded-md'> useMemo</span>{' '}
              hook in ReactJS
            </p>
            <br />
            <p>
              This hook is primarily used to prevent performance bottlenecks of
              apps where the re-renders happen after every state change. When
              there are particularly computation heavy calculations, like
              finding the nth prime of a number, there are virtually "n" number
              of re-renders happening in the algorithm. This can easily break
              the application in seconds, if not minutes.
            </p>
            <br />
            <p>
              <span className='bg-orange-200 p-1 rounded-md'>useMemo</span>{' '}
              allows us to "memoize" or "remember" a computed value between
              renders.
            </p>
            <br />
            <p>
              Consider the toggle button above next to the heading which
              switches between dark and light mode. There is no calculation
              involved; just a couple of extra classes that are added using a
              state variable. Now, for such a simple operation, we would
              definitely not appreciate if it would get stuck because of the
              n-th prime number value computation happening in between the
              toggles. This is where{' '}
              <span className='bg-orange-200 p-1 rounded-md'>useMemo</span>{' '}
              would come in to the picture. Instead of a normal function call or
              declaration, we instead wrap the function in the <b>useMemo</b>{' '}
              hook. This will <b>memoize</b> the results of the computation so
              that other functionalities like the toggle above, are not
              affected.
            </p>
          </article>
          <div className='ml-2'>
            <div className='border border-slate-200 shadow-md rounded-lg p-4 w-[300px] h-24 flex items-center justify-center'>
              <label>
                Enter the nth number here -
                <input
                  className={
                    'border border-slate-500 rounded-md focus:outline-none px-1 w-full mt-2 ' +
                    (isDarkTheme && ' text-black')
                  }
                  type='number'
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </label>
            </div>
            {number && (
              <div className='mt-4 bg-indigo-600 text-white px-2 py-3 rounded-md'>
                <h3 className='font-2xl font-bold text-md'>
                  nth Prime of{' '}
                  <span className='bg-white text-black px-2 mx-2 rounded-sm'>
                    {number}
                  </span>{' '}
                  is:
                  <span className='bg-orange-100 text-black text-xl px-2 rounded-sm mx-2'>
                    {nPrime}
                  </span>
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default UseMemoDemo
