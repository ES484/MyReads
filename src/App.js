import React from 'react';
import Home from './Components/Home';
import {Route, Routes} from 'react-router-dom';
import Search from './Components/Search';
import { MediaContextProvider } from './Components/MediaContext';
import NotFound from './Components/NotFound';
export default function App() {
  return (
    <>
    <MediaContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route/>
      </Routes>
    </MediaContextProvider>
  </>
  )
}
