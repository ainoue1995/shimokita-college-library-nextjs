import React from 'react'
import { Book } from '../interfaces/Book'
import { CommonImage } from './CommonImage'

interface Props {
  book: Book
}

export const BookCard = ({ book }: Props) => {
  console.log(book.front_cover === '')

  return (
    <CommonImage
      src={book.front_cover !== '' ? book.front_cover : '/no_image.jpg'}
      alt={book.title}
      width={200}
      height={300}
    />
  )
}
