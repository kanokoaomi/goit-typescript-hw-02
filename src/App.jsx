import { useEffect, useState } from 'react'
import fetchRequestForPictures from './fetchRequest'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  const [searchTerm, setSearchTerm] = useState(null)
  const [page, setPage] = useState(1)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [images, setImages] = useState(null)

  useEffect(() => {
    async function fetchImages() {
      try {
        setIsLoading(true)
        const images = await fetchRequestForPictures(searchTerm, page)
        setImages(images)
        console.log(images)

      } catch (error) {
        setError(true)

      } finally {
        setIsLoading(false)
      }
    }
    fetchImages()
  }, [searchTerm, page])

  return (
    <div>
      {isLoading && <Loader />}
      <SearchBar searchTerm={searchTerm} />
      {images !== null && <ImageGallery images={images} />}

    </div>
  )
}

export default App
