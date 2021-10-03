import { Button } from "@mui/material";

function Modal({ setShowModal }) {
  const closeModal = () => {
    setShowModal(false);
    document.removeEventListener("click", closeModal);
  };

  return (
    <div className="fixed z-[60] bg-black bg-opacity-50 top-0 left-0 h-full w-full">
      <div className="w-[300px] mx-auto p-4 bg-white mt-52 rounded-md shadow-md">
        <p className="my-4 animate-pulse">登録してしまいますか?</p>
        <div className="flex justify-evenly">
          <Button
            variant="contained"
            onClick={() => setShowModal(false)}
            className="animate-pulse active:scale-105"
          >
            登録しません
          </Button>
          <Button
            className="active:scale-90"
            color="secondary"
            variant="contained"
            onClick={() => setShowModal(false)}
          >
            <a href="https://www.youtube.com/channel/UCKOgDGUgEJtkRFQMha9TyDQ">登録します</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
