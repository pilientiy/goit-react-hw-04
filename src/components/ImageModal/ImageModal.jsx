import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, image, onKeyDown }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onKeyDown={onKeyDown}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          maxWidth: "50%",
          maxHeight: "50%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {image && (
        <img
          src={image}
          alt="Modal Image"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
