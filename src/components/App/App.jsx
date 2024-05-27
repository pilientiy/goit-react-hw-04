import { useEffect, useState } from "react";
import { fetchPicturesWithTopic } from "../../pictures-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    const fetchPictures = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchPicturesWithTopic(query, page);
        setData((prevState) => [...prevState, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPictures();
  }, [page, query]);

  const onSearch = async (value) => {
    setData([]);
    setQuery(value);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {data.length > 0 && (
        <ImageGallery pictures={data} openModal={openModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {data.length > 0 && !loading && totalPages > page && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default App;
