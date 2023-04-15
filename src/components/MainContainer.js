import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='col-span-12 px-10 mt-2'>
      <ButtonList />
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
        <VideoContainer />
      </div>
    </div>
  )
}

export default MainContainer
