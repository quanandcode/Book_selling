const Book = ({ book }) => {
  return (
    <div className="book-item">
      <img className="book-image" src={book.image.url} />
      <div className="book-content">
        <h3 className="book-name">{book.name}</h3>
        <p className="book-price">{book.price}</p>
        <p className="book-author">{book.author}</p>
      </div>
    </div>
  );
};
export default Book;
