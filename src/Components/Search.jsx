import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {search} from '../BooksAPI';
import Book from './Book';
import { MediaContext } from './MediaContext';
export default function Search(props) {
  const [books, setBooks] = useState(null);
  const {allBooks}= useContext(MediaContext);
  async function handleInsertData(e)
  {
    try {let query= e.target.value;
      let result = await search(query);
      //Update it to allow search more than one string
      result = result.filter((book)=> {return book.title.toLowerCase().includes(query.toLowerCase());
      });
      const bookWithShelf = result.map((book)=>{
         const bookShelf= allBooks.find((b)=> b.id === book.id);
         return {...book, shelf: bookShelf? bookShelf.shelf: 'none'};
      });
      setBooks(bookWithShelf);
    } 
    catch (error) {
      setBooks([]);
    }
    }
  return (
    <>
    <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div>
              <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" onChange={handleInsertData}/>
                </div>
            </div>
        </div>
            </div>
          </div>
        </div>
            <div className='row'>
                {books? books.map((book)=>
                <div className='col-md-3' key={book.id}>
                <div>
                <div className="list-books-content searchBooks">
                  <div>
                    <Book {...book}/>
                  </div>
                </div>
                </div>
              </div>
          )
          :<div className='col-md-8 offset-md-2'>
            <div>
              <h2>Please Enter Book Name</h2>
            </div>
            </div>}
            </div>
        </div>
    </>
  )
}
