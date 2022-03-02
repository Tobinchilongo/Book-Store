import React from 'react';
import BookItem from './BookItem';
import BookAdd from './BookAdd';

function BookList() {
  const list = [
    { name: 'firstBook', author: 'tobin', id: 1 },
    { name: 'secondbook', author: 'selma', id: 2 },
  ];
  function displayBooks() {
    const results = list.map((value) => (
      <BookItem key={value.id} book={value} />
    ));
    return results;
  }
  return (
    <>
      <ul>
        {displayBooks()}
      </ul>
      <BookAdd />
    </>
  );
}

export default BookList;
