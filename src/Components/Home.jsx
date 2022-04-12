import React, {useContext} from 'react';
import Shelf from './Shelf';
import '../BooksAPI';
import { MediaContext } from './MediaContext';
import { Link } from 'react-router-dom';
export default function Home() {
    const {currentlyReading, wantToRead, reads} = useContext(MediaContext);
  return (
    <>
    <div className="list-books-title">
        <h1>MyReads</h1>
    </div>
    <Shelf title="Currently Reading" books={currentlyReading}/>
    <Shelf title="Want to Read" books={wantToRead}/>
    <Shelf title="Read" books={reads}/>
    <Link className='btn btn-success rounded' to="/search">Search</Link>
    </>
  )
}
