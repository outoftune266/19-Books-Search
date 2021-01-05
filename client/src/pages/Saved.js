import React, { useEffect, useState } from "react";
import SavedBook from "../components/SavedBook/SavedBook";
import API from "../utils/API";

function Saved() {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => setSavedBooks(res.data))
      .catch((err) => console.log(err));
  }

  function deleteBook(e) {
    //console.log(e.target.id);
    API.deleteBook(e.target.id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Saved Books</h1>
      {savedBooks.length ? (
        <div>
          {savedBooks.map((book) => (
            <SavedBook bookInfo={book} deleteBook={deleteBook} />
          ))}
        </div>
      ) : (
        <h3>You have no Save Books</h3>
      )}
    </div>
  );
}

export default Saved;
