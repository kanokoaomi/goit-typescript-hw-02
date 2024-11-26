import { useContext, useEffect, useState } from 'react'
import fetchRequestForPictures from './fetchRequest'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import { Toaster } from 'react-hot-toast'
import SearchBar from './components/SearchBar/SearchBar'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'
import toast from 'react-hot-toast'
import './App.css'
import classNames from 'classnames'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
// import { ThemeContext } from './components/Context/ThemeContextProvider'

interface ModalData {
  id: string;
  imageSrc: string;
  imageAlt: string;
  description: string; 
  imageUrl: string; 
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

interface ErrorData {
  message: string;
}

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [error, setError] = useState<ErrorData | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [images, setImages] = useState<ImageData[] | null>(null)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)
  const [modalData, setModalData] = useState<ModalData | null>(null)

  // const { theme } = useContext(ThemeContext)

  // useEffect(() => {
  //   switch (theme) {
  //     case "blue": {
  //       document.body.style.backgroundColor = "#e6f1ff"
  //       break
  //     }
  //     case "dark": {
  //       document.body.style.backgroundColor = "#242424"
  //       break
  //     }
  //     case "light": {
  //       document.body.style.backgroundColor = "#ffffff"
  //       break
  //     }
  //   }
  // }, [theme])

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [modalIsOpen])

  const openModal = (data: ModalData) => {
    // console.log('openModal function data:', data)
    setIsOpen(true)
    setModalData(data)
  }

  const notify = () => {
    toast('No images for your search')
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalData(null)
  }

  const handleSubmit = (inputValue: string) => {
    setSearchTerm(inputValue)
    setPage(1)
  }

  const onLoadMoreBtn = () => {
    setPage((prevPage) => prevPage + 1)
  }

  useEffect(() => {
    async function fetchImages() {
      try {
        if (searchTerm === '') return
        setIsLoading(true)
        setError(null)
        const data = await fetchRequestForPictures(searchTerm, page)
        const images = data.results.map((image: any) => ({
          id: image.id,
          description: image.description,
          imageSrc: image.urls.regular,
          imageAlt: image.description || 'No description',
          urls: image.urls,
        }));
        setTotalPages(data.total_pages)

        if (data.total === 0) {
          notify()
        }

        setImages((prevImages) => {
          if (page === 1) {
            return images || []
          }
          return [...(prevImages || []), ...(images || [])]
        });
      } catch (error: any) {
        setError({ message: error.message })
      } finally {
        setIsLoading(false)
      }
    }
    fetchImages()
  }, [searchTerm, page])

  useEffect(() => {
    if (!isLoading && page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [isLoading, page])

  return (
    <div className={classNames('container')}>
      <div className={classNames('body')}>
        {isLoading && <Loader />}
        <Toaster />
        <SearchBar onSearch={handleSubmit} />
        {images && images.length > 0 && (
          <ImageGallery
           images={images}
           openModal={openModal}
          />
        )}
        {modalData && (
          <ImageModal
            modalData={modalData}
            closeModal={closeModal}
            isOpen={modalIsOpen}
          />
        )}
        {error && <ErrorMessage />}
        {page < totalPages && !isLoading && (
          <LoadMoreBtn onLoadMoreBtn={onLoadMoreBtn} />
        )}
      </div>
    </div>
  )
}

export default App
