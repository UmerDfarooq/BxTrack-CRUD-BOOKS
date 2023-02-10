import logo from './logo.svg';
import './App.css';
import Book from './pages/Book';
import BookList from './pages/BookList';
import EditBook from './pages/EditBook';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="topScreen">
        <NavBar> </NavBar>
      </div>
      <div className='Screen'>
    <Routes>
    <Route exact path='/addBook' element={<Book/>}/>
    <Route exact path='/books' element={<BookList/>}/>
    <Route exact path='/book/:uid' element={<EditBook/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
