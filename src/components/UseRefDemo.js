import { useEffect, useRef, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'

const UseRefDemo = () => {
  const [Y, setY] = useState(0)

  const dispatch = useDispatch()

  let x = 0

  const ref = useRef(0) // does not mean ref = 0

  /**
   * ref = {current: 0}
   * ref holds an object, not a single value
   * */

  console.log('Render...')

  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div className='col-span-12 py-4 flex flex-col justify-center items-center '>
      <h1 className='text-2xl text-indigo-600 mb-2 font-semibold py-2'>
        Demo for useRef hook
      </h1>
      <div className='flex items-start mt-5'>
        <article className='w-[600px] mr-4 border border-slate-200 rounded-md px-4'>
          <h3 className='text-xl font-semibold p-1'>
            Problem Statement: Change a variable's value without re-rendering
            the whole app.
          </h3>
          <br />
          <p>
            Here we have a variable "x" declared with "let" keyword. We have its
            value printed on the browser. There is also a button that has an
            "onClick" function to increase the value of x by 1 with each click.
          </p>
          <br />
          <p>
            The problem here is that while the value increases by 1 on each
            click, there is no way to render that value on the browser without
            using some form of state variable, which would then re-render the
            entire app. But as defined in the problem statement above, we do not
            need re-renders. How do we achive this?
          </p>
          <br />
        </article>
        <article className='w-[400px] ml-4 border border-slate-200 rounded-md px-4'>
          <h3 className='text-xl font-semibold p-1'>Examples -</h3>
          <div className='mt-8 px-4'>
            <button
              onClick={() => {
                x = x + 1
                console.log('X value is: ', x)
              }}
              className='px-2 bg-indigo-500 rounded-md text-white'
            >
              Increment "let" 👉
            </button>
            <span className='ml-2'>Value of x = {x}</span>
          </div>
          <div className='my-4 px-4'>
            <button
              onClick={() => {
                setY(Y + 1)
                console.log('Y value is: ', Y)
              }}
              className='px-2 bg-indigo-500 rounded-md text-white'
            >
              Increment "State" 👉
            </button>
            <span className='ml-2'>Value of Y = {Y}</span>
          </div>
          <div className='my-4 px-4'>
            <button
              onClick={() => {
                ref.current += 1
                console.log('Ref value is: ', ref.current)
              }}
              className='px-2 bg-indigo-500 rounded-md text-white'
            >
              Increment "Ref" 👉
            </button>
            <span className='ml-2'>Value of Ref = {ref.current}</span>
          </div>
        </article>
      </div>
    </div>
  )
}

export default UseRefDemo
