import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import { RelatedVideosContainer } from './VideoContainer'
import WatchVideoDetails from './WatchVideoDetails'
import useVideos from '../utils/useVideos'
import CommentsContainer from './CommentsContainer'

const WatchVideo = () => {
  const videos = useVideos()
  const dispatch = useDispatch()

  const [searchParams] = useSearchParams()

  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div className='px-10'>
      <div className='my-2 grid grid-cols-4'>
        <div className='col-span-3 mr-4'>
          <iframe
            style={{
              width: '100%',
              height: '500px',
            }}
            src={'https://www.youtube.com/embed/' + searchParams.get('v')}
            title='YouTube Video Player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
          {videos.map((video) => {
            if (video.id === searchParams.get('v')) {
              return <WatchVideoDetails key={video.id} info={video} />
            }
          })}
          <CommentsContainer />
        </div>
        <div>
          <RelatedVideosContainer />
        </div>
      </div>
    </div>
  )
}

export default WatchVideo
