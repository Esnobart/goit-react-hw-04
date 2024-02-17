import { SearchBar } from '../SearchBar/SearchBar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ImageGallery } from '../ImageGallery/ImageGallery';

function App() {
  const [query, setQuery] = useState('');
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [page, setPage] = useState(1);

  const newData = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
  };

  const LoadMorePages = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    if (query === '') {
      return
    }

    async function search() {
      try {
      setLoading(true);
      setErr(false);
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          client_id: "FjB1I_nxBBgWdF85uV_m4D93ACLTVZhwqm6F6Okg4Fc",
          query,
          page: 1,
          per_page: 20
        }
      });
        setImg(response.data.results);
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
      {err && <p>Something wents wrong</p>}
      {img.length > 0 && <ImageGallery items={img} loadMore={LoadMorePages} />}
      {loading && <p>Loading, please wait</p>}
    </div>
  )
}

export default App
