import React, { useEffect, useState } from 'react';
import NewBookForm from './Form.js'
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
  fetch("http://localhost:8000/api/books")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setIsLoaded(true);
          setBooks(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    console.log('error', error)
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log('books', books)
    return (
      <main>
        <h1>Favorite Books</h1>
        <NewBookForm />
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>by {book.author.firstname} {book.author.lastname}</p>
              <p>ISBN: {book.isbn}</p>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default App;
