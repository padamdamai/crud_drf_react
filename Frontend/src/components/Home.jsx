import Carousel from 'react-bootstrap/Carousel';
import Sidebar from './Sidebar';
function Home() {
  return (
    <>
<div className="flex">
    <div className="sidebars_container">
      <Sidebar/>
    </div>
    
    <div className='w-full'>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-full h-[100vh]"
          src="./stud.png"
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[100vh]"
          src="stud2.png"
          alt="./Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[100vh]"
          src="./stud3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
</div>
    
    </>
  );
}

export default Home;