import { useContext, useEffect, useState } from 'react'
import fetchRequestForPictures from './fetchRequest'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'
import toast from 'react-hot-toast'
import './App.css'
import classNames from 'classnames'
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { ThemeContext } from './components/Context/ThemeContextProvider';

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [page, setPage] = useState(1)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [images, setImages] = useState(null)
  const [totalPages, setTotalPages] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const { theme } = useContext(ThemeContext);


  // заборона прокрутки при відкритій модалці
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    };
  }, [modalIsOpen])

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


  // обробка запиту
  useEffect(() => {
    async function fetchImages() {
      try {
        if (searchTerm === "") return
        setIsLoading(true)
        setError(null)
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
      }
    }
    fetchImages()
  }, [searchTerm, page])


  // плавний скрол
  useEffect(() => {
    if (isLoading === false && page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [isLoading, page]);


  return (
    <div className={classNames('container', theme)}>
      <div className={classNames("body", theme)}>
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
        {error && <ErrorMessage />}
        {page < totalPages && isLoading === false && <LoadMoreBtn onLoadMoreBtn={onLoadMoreBtn} />}
      </div>
    </div>
  )
}

export default App
