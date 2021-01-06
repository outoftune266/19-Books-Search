import React from "react";

function Book(props) {
  let book = props.bookInfo;
  //console.log("Book Component");
  //console.log(book);
  return (
    <div class="card mb-3" style={{ "max-width": "80%" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <div class="row">
            <img src={book.volumeInfo.imageLinks.smallThumbnail} />
          </div>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5>
              {book.volumeInfo.title} by: {book.volumeInfo.authors}
            </h5>
            <p class="card-text">{book.volumeInfo.description}</p>
          </div>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={(e) => {
              window.location.href = book.volumeInfo.infoLink;
            }}
          >
            More Info
          </button>
          <button
            type="button"
            class="btn btn-primary"
            id={book.id}
            onClick={props.saveBook}
          >
            Save Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default Book;
