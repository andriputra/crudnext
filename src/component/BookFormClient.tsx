import React, {useState} from "react";
import BookForm from "@/component/BookForm";

interface BookFormClientProps{
    onSubmit: (newBook: {title: string; author: string;}) => void;
}

const BookFormClient : React.FC<BookFormClientProps> = (props) => {
    return <BookForm {...props} />;
};

export default BookFormClient;
export const useClient = true