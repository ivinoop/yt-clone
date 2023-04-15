import { HiUserCircle } from 'react-icons/hi2'

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center mt-1 p-1 bg-gray-200 rounded-md'>
    <HiUserCircle className='h-8 w-8' />
    <div className='ml-1'>
      <p className='text-sm font-semibold'>{name}</p>
      <p className='text-xs'>{message}</p>
    </div>
  </div>
)
}

export default ChatMessage
