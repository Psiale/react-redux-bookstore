import BooksForm from '../components/BooksForm';
import BooksList from './BooksList';
import Book from '../components/Book';

function App() {
  return (
    <div className="App">
      <BooksList Books={Book} />
      <BooksForm />
    </div>
  );
}

export default App;
