import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

function App() {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
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
      </article>
    </main>
  )
}

export default App