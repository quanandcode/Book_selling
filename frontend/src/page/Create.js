import { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [messageSuccess, setMessageSuccess] = useState(null);
  const book = {
    name,
    author,
    description,
    price,
    image,
  };
  const creatBook = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/admin/create/book", {
      method: "POST",
      body: JSON.stringify(book),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      setError(data.message);
      setMessageSuccess(null);
    }
    if (response.ok) {
      //reset state
      setError(null);
      setName("");
      setAuthor("");
      setDescription("");
      setPrice("");
      setImage("");
      setMessageSuccess("Bạn đã thêm sách thành công");
    }
  };

  return (
    <div className="container">
      <form onSubmit={creatBook} className="form-create-book">
        <label>
          Tên sách
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />
        </label>
        <label>
          Tên tác giả
          <input
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            type="text"
          />
        </label>
        <label>
          Mô tả sách
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
          />
        </label>
        <label>
          Giá sách
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="text"
          />
        </label>
        <label>
          Ảnh bìa sách
          <input
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
          />
        </label>
        <button className="btn" type="submit" value="Submit">
          Đăng Sách
        </button>
        {error && <div>{error}</div>}
        {messageSuccess && <div>{messageSuccess}</div>}
      </form>
    </div>
  );
};
export default Create;
