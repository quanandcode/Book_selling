import { useState } from "react";
import ModalDelete from "./ModalDelete";
const AdminTable = ({ books }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [idSelectedBook, setIdSelectedBook] = useState("");
  const [filenameSelectedBook, setFilenameSelectedBook] = useState("");
  const handleDeleteBook = (book) => {
    setFilenameSelectedBook(book.image.filename);
    setIsOpenModal(true);
    setIdSelectedBook(book._id);
  };
  return (
    <div>
      <table className="table-books">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Tên Sách</th>
            <th>Tên Tác Giả</th>
            <th>Giá sách</th>
          </tr>
          {books &&
            books.map((book) => (
              <tr key={book._id}>
                <td>{book._id}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>
                  <button className="btn">Sửa</button>
                  <button
                    className="btn btn-danger destroy-book"
                    onClick={() => handleDeleteBook(book)}
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {isOpenModal && (
        <ModalDelete
          setIsOpenModal={setIsOpenModal}
          idSelectedBook={idSelectedBook}
          filenameSelectedBook={filenameSelectedBook}
        ></ModalDelete>
      )}
    </div>
  );
};
export default AdminTable;
