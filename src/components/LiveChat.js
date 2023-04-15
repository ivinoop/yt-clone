import { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { randomMessageGenerator, randomNameGenerator } from '../utils/helper'

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('')

  const dispatch = useDispatch()

  const chatMessages = useSelector((store) => store.chat.messages)

  useEffect(() => {
    const timer = setInterval(() => {
      // API polling
      dispatch(
        addMessage({
          name: randomNameGenerator(),
          message: randomMessageGenerator(25),
        })
      )
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className='border border-slate-300 rounded-md'>
      <div className='flex flex-col-reverse h-[440px] overflow-y-scroll px-2'>
        <div>
          {chatMessages.map((msg, index) => (
            <ChatMessage key={index} name={msg.name} message={msg.message} />
          ))}
        </div>
      </div>
      <form
        className='p-2 w-full flex items-center mt-2 justify-between'
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(
            addMessage({
              name: 'Vinoo',
              message: liveMessage,
            })
          )
          setLiveMessage('')
        }}
      >
        <input
          className='border border-gray-400 w-[340px] rounded-md outline-none px-1'
          type='text'
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          type='submit'
          className='px-2 py-1 bg-indigo-500 rounded-md text-white text-sm pointer ml-2'
        >
          Add Chat
        </button>
      </form>
    </div>
  )
}

export default LiveChat
