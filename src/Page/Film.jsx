import React from 'react'
import FilmMainVideo from '../components/Film/FilmMainVideo'
import FilmVIdeoGalary from '../components/Film/FilmVIdeoGalary'

const Film = () => {
  return (
    <div>
      <FilmMainVideo />
      <div className='m-5'>

      <FilmVIdeoGalary />
      </div>
    </div>
  )
}

export default Film