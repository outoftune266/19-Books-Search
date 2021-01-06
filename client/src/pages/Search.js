import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Searchbar from "../components/Searchbar/Searchbar";
import Book from "../components/Book/Book";
import "./Search.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState({});
  const [searchedBooks, setSearchedBooks] = useState([]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setSearchTerm({ [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    //console.log("Handle Form Submit");
    //console.log(searchTerm.searchTerm);
    searchBooks(searchTerm.searchTerm);
  }

  function searchBooks(searchTerm) {
    console.log("searchBooks function");
    API.searchBooks(searchTerm)
      .then((res) => setSearchedBooks(res.data.items))
      .catch((err) => console.log(err));
    //console.log(searchedBooks);
  }

  function saveBook(e) {
    let book;
    //console.log("Save Book Funciton");
    //console.log(e.target.id);
    for (let i = 0; i < searchedBooks.length; i++) {
      if (searchedBooks[i].id === e.target.id) {
        book = searchedBooks[i];
      }
    }
    API.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.selfLink,
    })
      .then((res) => console.log(`Your book as been saved: ${res}`))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Searchbar
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        searchBooks={searchBooks}
      />
      {searchedBooks.length ? (
        <div>
          {searchedBooks.map((book) => (
            <Book bookInfo={book} saveBook={saveBook} />
          ))}
        </div>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
}

export default Search;
