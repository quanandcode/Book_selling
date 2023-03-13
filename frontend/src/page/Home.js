import Book from "../components/Book";
import { useEffect, useState } from "react";
const Home = () => {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    const fetchAllBook = async () => {
      try {
        const response = await fetch("http://localhost:4000/");
        const json = await response.json();
        console.log(response.ok);
        if (response.ok) {
          setBooks(json);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBook();
  }, []);
  return (
    <div className="container container-book">
      <div className="list-books">
        {books && books.map((book) => <Book key={book._id} book={book}></Book>)}
      </div>
    </div>
  );
};
export default Home;
