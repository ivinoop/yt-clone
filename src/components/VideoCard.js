const VideoCard = ({ info }) => {
  const { snippet, statistics } = info
  const { channelTitle, title, thumbnails, publishedAt } = snippet
  return (
    <div className='border border-slate-200 shadow-lg rounded-lg hover:border-2 hover:border-indigo-600 hover:transition hover:scale-125 hover:bg-white'>
      <img
        src={thumbnails.maxres?.url}
        alt=''
        className='rounded-t-lg shadow-md'
      />
      <div className='p-2'>
        <h2 className='text-[16px] font-semibold truncate overflow-hidden'>
          {title}
        </h2>
        <p className='text-sm text-slate-600'>{channelTitle}</p>
        <span className='text-xs text-slate-600'>
          {Number(statistics.viewCount).toLocaleString()} views
        </span>
        <span className='text-xs text-slate-600'> • </span>
        <span className='text-xs text-slate-600'>{publishedAt}</span>
      </div>
    </div>
  )
}

export default VideoCard
