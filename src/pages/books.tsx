import { Grid } from '@mui/material'
import React from 'react'
import { BookCard } from '../components/BookCard'
import { useBook } from '../repository/book'

const Books = () => {
  const { books, fetchBooks } = useBook()
  React.useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid key={book.ISBN} item xs={4}>
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Books
