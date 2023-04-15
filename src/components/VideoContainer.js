import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import useVideos from '../utils/useVideos'
import VideoListCard from './VideoListCard'

const VideoContainer = ({ shouldDisplayCard = true }) => {
  const videos = useVideos()
  return (
    <>
      {videos.map((video) => (
        <div>
          <Link key={video.id} to={'/watch?v=' + video.id}>
            {shouldDisplayCard ? (
              <VideoCard info={video} />
            ) : (
              <VideoListCard info={video} />
            )}
          </Link>
        </div>
      ))}
    </>
  )
}
export const RelatedVideosContainer = () => {
  return <VideoContainer shouldDisplayCard={false} />
}

export default VideoContainer
