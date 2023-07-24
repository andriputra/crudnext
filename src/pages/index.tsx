import React, {useState} from "react";
import BookList from "@/component/BookList";
import BookForm from "@/component/BookForm";
import './style.scss'
// import dynamic from "next/dynamic";

// const BookForm = dynamic(() => import("@/component/BookFormClient"),{
//   ssr: false,
// });

interface Book {
  id: number;
  title: string;
  author: string;
}

const booksData: Book[] = [
  {id: 1, title: 'Ini Buku Saya ke 1', author: 'Agus'},
  {id: 2, title: 'Ini Buku Saya ke 2', author: 'Agus Andri'},
];

const Home: React.FC = () =>{
  const [books, setBooks] = useState<Book[]>(booksData);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const handleAddBook = (newbook: {title: string; author: string}) => {
    const newBooks= [...books, {...newbook, id:Date.now() }];
    setBooks(newBooks);
  };

  const handleEditBook = (book: Book) => {
    setEditingBook(book);
  };

  const handleUpdateBook = (updatedBook : Book) => {
    const updatedBooks = books.map((book) => 
        book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
    setEditingBook(null);
  }

  const handleDeleteBook = (bookId: number) => {
    const filteredBooks = books.filter((book) => book.id !== bookId);
    setBooks(filteredBooks);
  }

  return(
    <div className="container">
      <h3>App Test CRUD</h3>
      <BookList books={books} onEdit={handleEditBook} onDelete={handleDeleteBook}/>
      {editingBook ? (
            <BookForm book={editingBook} onSubmit={handleUpdateBook} />
        ) : ( 
        <BookForm onSubmit={handleAddBook}/>
        )
      }
    </div>
  );

};
export default Home;

