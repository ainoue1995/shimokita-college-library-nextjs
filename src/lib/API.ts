import { AxiosPromise } from 'axios'
import { Book, BookAPIResponse } from '~/interfaces/Book'
import { axios } from '~/lib/axios'

export const getBookInfoAPI = (
  isbn: number,
): AxiosPromise<BookAPIResponse[]> => {
  const queries = {
    isbn: isbn,
  }
  return axios.get('/v1/books/searchByIsbn', {
    params: queries,
  })
}

/**
 * スプレッドシートにある書籍を全て取得するAPI
 * @returns
 */
export const getAllBooksDataAPI = async () => {
  return axios.get('/v1/books/all')
}

/**
 * スプレッドシートに1件登録するAPI
 */
export const addBook = async (newBook: Book) => {
  axios.get('/v1/books/book')
}
