import Modal from "react-modal";

const customStyles = {
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    background: "none",
  },
};

const ImageModal = ({ modalIsOpen, closeModal, image }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      {!image ? null : (
        <>
          <img
            src={image.urls.regular}
            alt={image.alt_description || "Photograph"}
            style={{
              width: "60vw",
              height: "80vh",
              borderRadius: "20px",
            }}
          />
          <div style={{ borderRadius: "20px" }}>
            <h1 style={{ margin: "0", color: "white", textAlign: "center" }}>
              Photograph Information
            </h1>
            <ul style={{ margin: "0", listStyle: "circle" }}>
              <li style={{ color: "white", fontSize: "20px" }}>
                Instagram Account:{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "rgba(107, 242, 244, 1)",
                  }}
                >
                  {image.user.instagram_username || "Undefined"}
                </span>
              </li>
              <li style={{ color: "white", fontSize: "20px" }}>
                Likes:{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "rgba(239, 51, 51, 1)",
                  }}
                >
                  {image.likes}
                </span>
              </li>
              <li style={{ color: "white", fontSize: "20px" }}>
                Created Date:{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "rgba(235, 51, 235, 1)",
                  }}
                >
                  {new Date(image.created_at).toLocaleString()}
                </span>
              </li>
            </ul>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ImageModal;
