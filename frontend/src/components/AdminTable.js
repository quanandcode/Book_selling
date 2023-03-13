const AdminTable = ({ books }) => {
  return (
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
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default AdminTable;
