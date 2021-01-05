import axios from "axios";

export default {
  getBooks: function () {
    console.log("Get Books");
    return axios.get("/api/books");
  },

  getBook: function (id) {
    console.log("Get Book");
    return axios.get("/api/books/" + id);
  },

  deleteBook: function (id) {
    console.log("Delete Book");
    return axios.delete("/api/books/" + id);
  },

  saveBook: function (bookData) {
    console.log("Save Book");
    return axios.post("/api/books", bookData);
  },

  searchBooks: function (searchTerm, bookData) {
    console.log("Search Book API call");
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=q" + searchTerm,
      bookData
    );
  },
};
