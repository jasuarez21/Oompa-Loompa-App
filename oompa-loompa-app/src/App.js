import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { Header } from './components/Header/Header';
import DetailOfOompa from './components/DetailOfOompa/DetailOfOompa'
import ListOfOompas from './components/ListOfOompas/ListOfOompas';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ListOfOompas/>} />
          <Route path="/:id" element={<DetailOfOompa/>} />
        </Routes> 
      </BrowserRouter>
   </Provider>
  );
}

export default App;
