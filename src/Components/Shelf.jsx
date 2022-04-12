import React from 'react';
import Book from './Book';
import '../App';
export default function Shelf(props) {
  return (
    <>
    <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {props.books && props.books.map((book)=>
                          <Book {...book} key={book.id}/>
                    )}
                    </ol>
                  </div>
                </div>
              </div>
    </div>
    </>
  )
}
