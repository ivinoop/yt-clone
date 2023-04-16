import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { TbShare3 } from 'react-icons/tb'
import { TfiDownload } from 'react-icons/tfi'
import { BsThreeDots } from 'react-icons/bs'
import { MdOutlineSort } from 'react-icons/md'
import { HiUser, HiUserCircle } from 'react-icons/hi2'

const WatchVideoDetails = ({ info }) => {
  const { snippet, statistics } = info
  const { channelTitle, title, thumbnails, publishedAt } = snippet
  return (
    <>
      <h2 className='text-lg mt-3 mb-1 font-bold truncate overflow-hidden'>
        {title}
      </h2>
      <div className='flex justify-between items-center'>
        <div className='p-2 flex items-center'>
          <img
            src={thumbnails.default?.url}
            alt=''
            className='rounded-full w-10 h-10 object-cover mr-4'
          />
          <div>
            <p className='text-lg font-semibold text-black'>{channelTitle}</p>
            <span className='text-xs text-slate-600'>
              {Number(statistics.viewCount).toLocaleString()} views
            </span>
          </div>
          <button className='bg-black px-4 py-1 rounded-3xl text-white ml-10 text-base'>
            Subscribe
          </button>
        </div>
        <div className='flex items-center'>
          <div className='flex items-center bg-slate-100 rounded-3xl px-5 py-2 mr-2'>
            <AiOutlineLike className='h-5 w-5 mr-1 cursor-pointer' />
            <span className='ml-2 pr-4 border border-slate-300 border-t-0 border-l-0 border-b-0 font-semibold'>
              {Number(statistics.likeCount).toLocaleString()}
            </span>
            <AiOutlineDislike className='h-5 w-5 mx-2 cursor-pointer' />
          </div>
          <div className='flex items-center bg-slate-100 rounded-3xl px-5 py-2 mr-2 cursor-pointer'>
            <TbShare3 className='h-5 w-5 mr-1' />
            <span className='font-semibold ml-1'>Share</span>
          </div>
          <div className='flex items-center bg-slate-100 rounded-3xl px-5 py-2 mr-2 cursor-pointer'>
            <TfiDownload className='h-4 w-4 mr-1' />
            <span className='font-semibold ml-1'>Download</span>
          </div>
          <div className='bg-slate-100 flex items-center justify-center rounded-full w-8 h-8 cursor-pointer'>
            <BsThreeDots className='h-6 w-6' />
          </div>
        </div>
      </div>
      <div className='bg-gray-200 p-3 rounded-lg text-sm'>
        {snippet.description}
      </div>
      <div className='flex items-center mb-2 mt-8'>
        <p className='font-lg'>{statistics.commentCount} Comments</p>
        <MdOutlineSort className='w-8 h-8 ml-10 mr-3' /> <span>Sort by</span>
      </div>
      <div className='flex items-start mt-8'>
        <HiUser className='w-8 h-8 bg-slate-100 rounded-full p-1' />
        <input
          type='text'
          className='border border-b-slate-200 border-t-0 border-l-0 border-r-0 focus:outline-none ml-4 w-full'
          placeholder='Add a comment'
        />
      </div>
    </>
  )
}

export default WatchVideoDetails
