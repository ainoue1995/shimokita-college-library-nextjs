import React from 'react'
import { useAppDispatch } from '../lib/redux'
import { fetchBooks } from '../store/slicer/bookSlicer'

const Index = () => {
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])
  return <div>Index</div>
}
export default Index
