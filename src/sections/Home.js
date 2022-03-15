// import { FaArrowCircleDown } from 'react-icons/fa'

function Home() {
  return(
    <div className="section" id="home">
      <div className="home container">
        <img src={require('../pictures/home.png')} alt='home'/>
      </div>
      {/* <div className='arrow'>
        <FaArrowCircleDown />
      </div> */}
    </div>
  )
}

export default Home