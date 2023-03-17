import { useState, useEffect } from "react";
import AdminTable from "../components/AdminTable";
import { Link } from "react-router-dom";
const Admin = () => {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/admin/stored/books"
        );
        const data = await response.json();
        if (response.ok) {
          setBooks(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchBooks();
  }, []);
  return (
    <div className="container out-navbar">
      <h3>Danh sách các đầu sách đang bán</h3>
      <div className="admin-handle">
        <Link to="/admin/create/book">
          <button className="add-book-btn btn">Thêm Đầu Sách</button>
        </Link>

        {/* <div className="action-admin">

        </div> */}
      </div>
      <AdminTable books={books}></AdminTable>
    </div>
  );
};
export default Admin;
