import React from 'react';
import Home from './Components/Home';
import Shelf from './Components/Shelf';
import {Route, Routes} from 'react-router-dom';
import Search from './Components/Search';
import { MediaContextProvider } from './Components/MediaContext';
export default function App() {
  return (
    <>
    <MediaContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/shelf' element={<Shelf/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route/>
      </Routes>
    </MediaContextProvider>
  </>
  )
}
