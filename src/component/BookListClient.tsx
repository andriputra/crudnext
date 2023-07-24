import React from "react";
import BookList from "@/component/BookList";

interface BookListClientProps {
    books: Array <{
        id: number;
        title: string;
        author: string;
    }>;
    onEdit: (book:{
        id: number;
        title: string;
        author: string;
    }) => void;
    onDelete: (bookId: number) => void;
}


const BookListClient :React.FC<BookListClientProps> = (props) => {
    return <BookList {...props} />;
};

export default BookListClient;
export const useClient = true;