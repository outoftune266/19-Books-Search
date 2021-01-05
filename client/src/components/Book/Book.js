import React from "react";

function Book(props) {
  let book = props.bookInfo;
  //console.log("Book Component");
  //console.log(book);
  return (
    <div>
      <h3>{book.volumeInfo.title}</h3>
      <h4>by: {book.volumeInfo.authors}</h4>
      <img src={book.volumeInfo.imageLinks.smallThumbnail} />
      <p>{book.volumeInfo.description}</p>
      <a href={book.selfLink}>Click Here to View More</a>
      <button id={book.id} onClick={props.saveBook}>
        Save To Your Library
      </button>
    </div>
  );
}

export default Book;
