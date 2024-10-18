import { useEffect, useState } from 'react'
import fetchRequestForPictures from './fetchRequest'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar'
import LoadMoreButton from './components/LoadMoreButton/LoadMoreButton'
import Modal from 'react-modal'
import ImageModal from './components/ImageModal/ImageModal'

Modal.setAppElement('#root')

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [page, setPage] = useState(1)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [images, setImages] = useState(null)
  const [totalPages, setTotalPages] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setIsOpen(true)
    setModalData(data)
    console.log('it works')
  }

  // const afterOpenModal = () => {
  //   Modal.setAppElement()
  // }

  const closeModal = () => {
    setIsOpen(false)
    setModalData(null)
  }

  const handleSubmit = (inputValue) => {
    setSearchTerm(inputValue)
    setPage(1)
    setImages([])
  }

  const onLoadMoreBtn = () => {
    // setTotalPages(images.total_pages)
    setPage((prevPage) => prevPage + 1)
  }

  useEffect(() => {
    async function fetchImages() {
      try {
        if (searchTerm === "") return
        setIsLoading(true)

        const data = await fetchRequestForPictures(searchTerm, page)
        const images = data.results

        setTotalPages(data.total_pages)

        setImages((prevImages) => {
          if (page === 1) {
            return images
          }
          return [...prevImages, ...images]
        })
      } catch (error) {
        setError(error.message)

      } finally {
        setIsLoading(false)
        setError(false)
      }
    }
    fetchImages()
  }, [searchTerm, page])

  useEffect(() => {
    if (page > 1) {
      window.scrollBy({
        top: 800,
        behavior: 'smooth',
      });
    }
  }, [page]);

  return (
    <div>
      {isLoading && <Loader />}
      <Toaster />
      <SearchBar onSearch={handleSubmit} />
      {images !== null &&
        <ImageGallery
          images={images}
          openModal={openModal}
        />}
      {modalData && (
        <ImageModal
          openModal={openModal}
          modalData={modalData}
          closeModal={closeModal}
          isOpen={modalIsOpen}
        />
      )}
      {error && "Oops, an unexpected error accured. Try again!"}
      {page < totalPages && <LoadMoreButton onLoadMoreBtn={onLoadMoreBtn} />}
    </div>
  )
}

export default App
