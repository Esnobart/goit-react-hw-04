import { SearchBar } from '../SearchBar/SearchBar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { Toaster } from 'react-hot-toast';
import { ImageModal } from '../ImageModal/ImageModal';
import { Audio } from 'react-loader-spinner'

function App() {
  const [query, setQuery] = useState('');
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(false);
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState(null);
  const key = 'FjB1I_nxBBgWdF85uV_m4D93ACLTVZhwqm6F6Okg4Fc';

  const openModal = (image) => {
    setImage(image);
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  const newData = async (newQuery) => {
    setImg([])
    setQuery(newQuery);
    setPage(1);
  };

  const LoadMorePages = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    if (query === '') {
      return
    }

    async function search() {
      try {
        setResults(false)
        setLoading(true);
        setErr(false);
        const response = await axios.get("https://api.unsplash.com/search/photos", {
          params: {
            client_id: key,
            query,
            page,
            per_page: 20
          }
        });
        setImg(prevImg => [...prevImg, ...response.data.results]);
        if (response.data.results.length === 0) {
          setResults(true)
        }
          console.log(img)
        } catch {
          setImg([])
          setErr(true)
        } finally {
          setLoading(false)
      }
    }
    search();
  }, [query, page])

  return (
    <div>
      <SearchBar onSearch={newData} />
      {err && <ErrorMessage />}
      {img.length > 0 && (<div>
        <ImageGallery items={img} openModal={openModal} closeModal={closeModal} modal={modal} img={image} />
        {img.length > 0 && <LoadMoreBtn loadMore={LoadMorePages} />}
        {image && (<ImageModal isOpen={modal} closeModal={closeModal} img={image} />)}
      </div>)} 
      {loading && (<div><Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      /><p>Loading...</p></div>)}
      {results && <p>No results</p>}
      <Toaster
        position='top-right'
      />
    </div>
  )
}

export default App
