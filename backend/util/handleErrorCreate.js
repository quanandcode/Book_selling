const handleErrorCreate = function (err) {
  const errors = {
    name: "",
    author: "",
    description: "",
    price: "",
    image: "",
  };
  return errors;
};
module.exports = handleErrorCreate;
