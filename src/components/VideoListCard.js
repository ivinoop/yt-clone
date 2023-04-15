const VideoListCard = ({ info }) => {
  const { snippet, statistics } = info
  const { channelTitle, title, thumbnails, publishedAt } = snippet
  console.log(typeof(publishedAt))
  return (
    <div className='flex items-start mb-4'>
      <img src={thumbnails.maxres?.url} alt='' className='rounded-lg w-40 mr-2' />
      <div className='w-[200px]'>
        <h2 className='text-base font-semibold truncate overflow-hidden'>
          {title}
        </h2>
        <p className='text-xs text-slate-700'>{channelTitle}</p>
        <span className='text-xs text-slate-600'>
          {Number(statistics.viewCount).toLocaleString()} views
        </span>
        <span className='text-xs text-slate-600'> • </span>
        <span className='text-xs text-slate-600'>{publishedAt}</span>
      </div>
    </div>
  )
}

export default VideoListCard
