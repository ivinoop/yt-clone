import { useState, useEffect } from 'react'
import { YT_VIDS_API_URL } from './config'

const useVideos = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    const videoData = await fetch(YT_VIDS_API_URL)
    const videoJson = await videoData.json()
    console.log(videoJson.items);
    setVideos(videoJson?.items)
  }

  return videos
}

export default useVideos
