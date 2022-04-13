import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {search} from '../BooksAPI';
import Book from './Book';
export default function Search(props) {
  const [books, setBooks] = useState(null);
  async function handleInsertData(e)
  {
    try {let query= e.target.value;
      let result = await search(query);
      result = result.filter((book)=> {return book.title.includes(query)});
      setBooks(result);
      
    } catch (error) {
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
