import { useAppDispatch, useAppSelector } from '../lib/redux'
import { bookSelector, fetchBooks } from '../store/slicer/bookSlicer'

export const useBook = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(bookSelector)

  const _fetchBooks = async () => {
    dispatch(fetchBooks())
  }
  return {
    fetchBooks: _fetchBooks,
    books: state.books,
  }
}
