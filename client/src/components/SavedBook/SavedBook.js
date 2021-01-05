import React from "react";

function SavedBook(props) {
  let book = props.bookInfo;
  console.log("saved book component");
  console.log(book);
  return (
    <div>
      <h3>{book.title}</h3>
      <h4>by: {book.authors}</h4>
      <img src={book.image} />
      <p>{book.description}</p>
      <a href={book.link}>Click Here to View More</a>
      <button id={book._id} onClick={props.deleteBook}>
        Delete From Your Library
      </button>
    </div>
  );
}

export default SavedBook;
