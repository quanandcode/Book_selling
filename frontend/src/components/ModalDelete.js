import { IoCloseSharp } from "react-icons/io5";

const ModalDelete = ({
  setIsOpenModal,
  idSelectedBook,
  filenameSelectedBook,
}) => {
  const deleteBook = async () => {
    setIsOpenModal(false);
    console.log(filenameSelectedBook);
    const response = await fetch(
      `http://localhost:4000/admin/stored/books/${idSelectedBook}`,
      {
        method: "DELETE",
        body: {
          filename: filenameSelectedBook,
        },
      }
    );
  };

  return (
    <div
      className="modal"
      onClick={() => {
        setIsOpenModal(false);
      }}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <i>
          <IoCloseSharp
            className="button-close"
            onClick={() => setIsOpenModal(false)}
          ></IoCloseSharp>
        </i>
        <div className="modal-header">
          <h3>Bạn chắc chắn muốn xoá đầu sách này</h3>
        </div>
        <div className="modal-content">
          <p>
            Nếu thực hiện hành vi này, dữ liệu về đầu sách này sẽ không thể khôi
            phục!
          </p>
        </div>
        <div className="modal-btn">
          <button className="btn" onClick={() => setIsOpenModal(false)}>
            Huỷ bỏ
          </button>
          <button className="btn btn-danger" onClick={deleteBook}>
            Xoá Vĩnh Viễn
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalDelete;
