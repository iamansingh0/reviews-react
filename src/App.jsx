import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

function App() {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const nextPerson = () => {
    setIndex((current) => {
      return current + 1
    })
  }
  const prePerson  = () => {
    setIndex((current) => {
      return current - 1
    })
  }

  // console.log(name)
  return (
    <main>
      <article className='review'>
        <div className="imageContainer">
          <img src={image} alt={name} className='person-img'/>
          <div className='qoute-icon'>
            <FaQuoteRight className='icon'/>
          </div>
        </div>
        <h4 className='name'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className="btn-contaner">
          <button className='prev-btn' onClick={prePerson}>
              <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
              <FaChevronRight />
          </button>
        </div>
      </article>
    </main>
  )
}

export default App