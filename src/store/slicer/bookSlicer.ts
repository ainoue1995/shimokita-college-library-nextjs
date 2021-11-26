import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '~/store/store'
import { Book, SearchBook } from '../../interfaces/Book'
import { getAllBooksDataAPI, getBookInfoAPI } from '../../lib/API'

interface BookState {
  books: Book[]
  searchedBook: SearchBook | null
  isLoading: boolean
  errors: any
}

const initialState: BookState = {
  books: [],
  searchedBook: null,
  isLoading: false,
  errors: null,
}

export const searchBooks = createAsyncThunk(
  'book/searchBooks',
  async (isbn: number, { dispatch, rejectWithValue }) => {
    try {
      const res = await getBookInfoAPI(isbn)
      // dispatch()
      return res.data
    } catch (err: any) {
      if (!err.response) throw err
      return rejectWithValue(err.response.data)
    }
  },
)

export const fetchBooks = createAsyncThunk(
  'book/fetchBooks',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await getAllBooksDataAPI()

      console.log('res.data', res.data)

      dispatch(bookSlice.actions.setBooks(res.data))
      return res.data
    } catch (err: any) {
      if (!err.response) throw err
      return rejectWithValue(err.response.data)
    }
  },
)

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      console.log('action', action.payload)

      state.books = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchBooks.pending, (state) => {
        state.isLoading = true
      })
      .addCase(searchBooks.rejected, (state, action) => {
        console.log('action.payload', action.payload)

        state.isLoading = false
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.isLoading = false
      })
    builder
      .addCase(fetchBooks.pending, (state, action) => {})
      .addCase(fetchBooks.rejected, (state, action) => {})
      .addCase(fetchBooks.fulfilled, (state, action) => {})
  },
})

export const bookSelector = (state: RootState): BookState => state.book

export default bookSlice.reducer
