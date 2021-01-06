import React from "react";

function SavedBook(props) {
  let book = props.bookInfo;
  console.log("saved book component");
  console.log(book);
  return (
    <div class="card mb-3" style={{ "max-width": "80%" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <div class="row">
            <img src={book.image} />
          </div>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5>
              {book.title} by: {book.authors}
            </h5>
            <p class="card-text">{book.description}</p>
          </div>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={(e) => {
              window.location.href = book.link;
            }}
          >
            More Info
          </button>
          <button
            type="button"
            class="btn btn-danger"
            id={book.id}
            onClick={props.deleteBook}
          >
            Delete Book
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* <div class="card mb-3" style={{ "max-width": "80%" }}>
  <div class="row g-0">
    <div class="col-md-4">
      <div class="row">
        <img src={book.image} />
      </div>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5>
          {book.title} by: {book.authors}
        </h5>
        <p class="card-text">{book.description}</p>
      </div>
      <button
        type="button"
        class="btn btn-secondary"
        onClick={(e) => {
          window.location.href = book.link;
        }}
      >
        More Info
      </button>
      <button
        type="button"
        class="btn btn-primary"
        id={book.id}
        onClick={props.deleteBook}
      >
        Save Book
      </button>
    </div>
  </div>
</div>; */
}

export default SavedBook;
