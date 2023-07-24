import React from "react";

interface Book{
    id: number;
    title: string;
    author: string;
}

interface BookListProps{
    books: Book[];
    onEdit: (book: Book) => void;
    onDelete: (bookId: number) => void;
}

const BookList : React.FC<BookListProps> = ({books, onEdit, onDelete}) =>{
    return(
        <div>
            <h3>Daftar buku Anda</h3>
            <ul className="list">
                {books.map((book) =>(
                    <li key={book.id}>
                        <div className="list-item"><strong>{book.title}</strong>
                        <span>({book.author})</span></div>
                        <div className="button-action">
                            <button onClick={() => onEdit(book)}>Edit</button>
                            <button onClick={() => onDelete(book.id)}>Hapus</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default BookList;