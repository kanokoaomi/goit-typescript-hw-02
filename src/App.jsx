import { useEffect, useState } from 'react'
import fetchRequestForPictures from './fetchRequest'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import SearchBar from './components/SearchBar/SearchBar'
import LoadMoreButton from './components/LoadMoreButton/LoadMoreButton'

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [page, setPage] = useState(1)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [images, setImages] = useState(null)

  // const onFormSubmit = (inputValue) => {
  //   setSearchTerm(inputValue);
  //   async function fetchImages() {
  //     try {
  //       if (images === null) return
  //       setImages([])
  //       setIsLoading(true)
  //       const images = await fetchRequestForPictures(searchTerm, page)
  //       setImages(images)
  //       console.log(searchTerm)
  //       console.log(images)

  //     } catch (error) {
  //       setError(error.message)

  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }
  //   fetchImages()
  // }

  const handleSubmit = (inputValue) => {
    setSearchTerm(inputValue)
  }

  useEffect(() => {
    async function fetchImages() {
      try {
        if (images === null) return
        setImages([])
        setIsLoading(true)
        const images = await fetchRequestForPictures(searchTerm, page)

        if (page !== 1) {
          setImages((previosImages) => [...previosImages, images])
        } else {
          setImages(images)
        }

      } catch (error) {
        setError(error.message)

      } finally {
        setIsLoading(false)
      }
    }
    fetchImages()
  }, [searchTerm, page])

  return (
    <div>
      {isLoading && <Loader />}
      <SearchBar onSearch={handleSubmit} />
      {images !== null && <ImageGallery images={images} />}
      {error && "Oops, an unexpected error accured. Try again!"}
      {<LoadMoreButton />}
    </div>
  )
}

export default App
