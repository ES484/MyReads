import React, {useContext} from 'react';
import {update} from '../BooksAPI';
import { MediaContext } from './MediaContext';
export default function Book(props) {
  let {getBook}= useContext(MediaContext);
    async function updateWhenChange(e)
    {
        let book = props;
        let shelf = e.target.value;
        await update(book, shelf);
        getBook();
    }
  return (
    <>
    <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.imageLinks && props.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={updateWhenChange} value={props.shelf}>
                                <option value="move">Move to...</option>
                                <option value="currentlyReading"> Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{props.title}</div>
                          <div className="book-authors">{props.authors}</div>
    </div>
    </>
  )
}
