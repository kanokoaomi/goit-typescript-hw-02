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
import toast from 'react-hot-toast'

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
  }

  const notify = () => {
    toast('No images for your search');
  }
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

        if (data.total === 0) {
          notify()
        }

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
    if (isLoading === false && page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [isLoading, page]);

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
      {page < totalPages && isLoading === false && <LoadMoreButton onLoadMoreBtn={onLoadMoreBtn} />}
    </div>
  )
}

export default App
