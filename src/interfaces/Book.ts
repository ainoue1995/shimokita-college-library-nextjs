interface Book {
  ISBN: number
  front_cover: string
  URL: string
  publisher: string
  pubDate: string
  title: string
  author: string
  owner: string
  location: string
}

interface SearchBook {
  author: string
  cover: string
  isbn: number
  pubdate: string
  publisher: string
  series: string
  title: string
  volume: string
}

interface BookAPIResponse {
  hanmoto: any
  onix: any
  summary: BookInfo
}

interface BookInfo {
  author: string
  cover: string
  isbn: number
  pubdate: string
  publisher: string
  series: string
  title: string
  volume: string
}

export type { Book, SearchBook, BookAPIResponse }
