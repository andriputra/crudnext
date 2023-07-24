import React, { useState, useEffect } from "react";

interface Book{
    id: number;
    title: string;
    author: string;
}

interface BookFormProps {
    book?: Book;
    onSubmit: (newBook: {title:string; author:string;}) => void;
}

const BookForm: React.FC<BookFormProps> = ({ book, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [titleError, setTitleError] = useState('');
    const [authorError, setAuthorError] = useState('');

    useEffect(() =>{
        if (book) {
            setTitle(book.title);
            setAuthor(book.author);
        }
    }, [book]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTitle(value.toUpperCase());

        if (value.match(/^[A-Za-z0-9\s]+$/)){
            setTitleError('');
        } else {
            setTitleError("error caracter")
        }
    };

    const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAuthor(value);

        if (value.match(/^[0-9\s]+$/)){
            setAuthorError('')
        } else {
            setAuthorError('Hanya boleh angka dan spasi')
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({...book, title, author });
    };

    const isSubmitDisabled = titleError || authorError;

    return (
        <div>
            <h3>Tambah Data Buku</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Isi dengan Judul Buku"
                    required
                    style={{borderColor: titleError ? "red" : "initial"}}
                />
                {titleError && <p style={{color: 'red', fontSize: '9px'}}>{titleError}</p>}
                <input
                    type="text"
                    value={author}
                    onChange={handleAuthorChange}
                    placeholder="isi dengan nama penulis"
                    required
                    style={{borderColor: authorError ? "red" : "initial"}}
                />
                {authorError && <p style={{color: 'red', fontSize: '9px'}}>{authorError}</p>}
                <button type="submit" disabled={isSubmitDisabled}>Tambah Buku</button>
            </form>
        </div>
    )
}
export default BookForm;