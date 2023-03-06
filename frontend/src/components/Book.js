const Book = ({ book }) => {
  return (
    <div className="book-item">
      <div className="book-image" src="" />
      <h3 className="book-name">{book.name}</h3>
      <p className="book-description">{book.description}</p>
    </div>
  );
};
export default Book;
