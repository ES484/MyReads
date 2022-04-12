import React from 'react';
import { createContext} from 'react';
import { useEffect, useState } from 'react';
import { getAll } from '../BooksAPI';
export let MediaContext = createContext([]);
export function MediaContextProvider(props)
{
    let [allBooks,SetAllBooks]= useState([]);
    let [currentlyReading,SetcurrentRead]= useState([]);
    let [wantToRead,SetWantToRead]= useState([]);
    let [reads,SetReads]= useState([]);
    async function getBooks()
    {
        allBooks = await getAll();
        SetAllBooks(allBooks);
    }
    async function getBook(){
        await getBooks();
        SetcurrentRead(allBooks.filter((book)=>{return book.shelf === "currentlyReading"}));
        SetWantToRead(allBooks.filter((book)=>{return book.shelf === "wantToRead"}));
        SetReads(allBooks.filter((book)=>{return book.shelf === "read"}));
    }
    useEffect(()=>{
        getBooks();
        getBook();
    },[]);
    return <MediaContext.Provider value={{allBooks, currentlyReading, wantToRead, reads, getBook}}>
        {props.children}
    </MediaContext.Provider>
}