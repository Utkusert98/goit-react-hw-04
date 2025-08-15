import { useEffect, useState } from "react";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import axios from "axios";
import Loader from "./Loader/Loader";
import ImageModal from "./ImageModal/ImageModal";
import Modal from "react-modal";
Modal.setAppElement("#root");

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const handleSearch = (newQuery) => {
    setQuery(newQuery.trim());
    setPage(1);
    setData([]);
  };
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    const request = async () => {
      try {
        setIsLoader(true);
        setError(null);
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: { page, query, per_page: 12 },
            headers: {
              Authorization:
                "Client-ID e-SwXkideXDiNFEtKIUucxcHn24OOz3QewngErlUaP4",
            },
          }
        );
        setData((prevData) =>
          page === 1
            ? response.data.results
            : [...prevData, ...response.data.results]
        );
      } catch (error) {
        setError("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
        console.error(error?.message || error);
        setQuery("");
      } finally {
        setIsLoader(false);
      }
    };
    request();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={data} onClick={openModal} />
      {isLoader && <Loader />}
      {data.length > 0 && !isLoader && <LoadMoreBtn submit={handleLoadMore} />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        image={selectedImage}
      />
    </>
  );
};

export default App;
