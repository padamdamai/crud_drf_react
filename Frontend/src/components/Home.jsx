import Carousel from 'react-bootstrap/Carousel';
import Sidebar from './Sidebar';

function Home() {
  return (
    <>
      <div className="relative flex">
        <div className="absolute top-0 left-0 z-50">
          <Sidebar />
        </div>

        <div className="w-full h-[100vh]">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-full h-[100vh] object-cover"
                src="./diverse.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full h-[100vh] object-cover"
                src="stud2.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-full h-[100vh] object-cover"
                src="./stud.png"
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
