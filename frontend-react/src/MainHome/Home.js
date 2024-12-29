import "../script.js";

import "../style.css";
// import img from "../images/logo.webp"
// import img1 from "../images/bg2.webp"
import img3 from "../images/bg.jpg";
import img4mumbai from "../images/bg4 mumbai.jpg";
import cateImg from "../images/Img Cate new.jpg";


import { Carousel } from 'react-bootstrap';

// Importing ForntAwsome for icon and symbols
import { faStar } from "@fortawesome/free-solid-svg-icons";


import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faStar);

export default function Home() {
  return (
    <div  className="credit text-center">
    
          {/* <h1>Welcome to Buidlmart</h1> 
         <img  src={img} style={{width:"500px", height:"300px"  }} alt="pic"/>
    <div className="credit text-center"> */}

      <h1 style={{ fontSize: '3rem', color: 'orange', marginBottom: '20px' }}>BuildMart</h1>

      {/* <img  src={img} style={{width:"500px", height:"300px"  }} alt="pic"/> */}

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="carousel-container">
        <Carousel interval={2000} prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}>
          <Carousel.Item>
            <img className="d-block w-100" src={img4mumbai} alt="First slide" style={{ width: "220px", height: "590px" }} />
            <Carousel.Caption>
              {/* <Button variant="primary" className="carousel-btn">Previous</Button>
            <Button variant="primary" className="carousel-btn">Next</Button> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={cateImg} alt="Second slide" style={{ width: "220px", height: "590px" }} />
            <Carousel.Caption>
              {/* <Button variant="primary" className="carousel-btn">Previous</Button>
            <Button variant="primary" className="carousel-btn">Next</Button> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" style={{ width: "220px", height: "590px" }} />
            <Carousel.Caption>
              {/* <Button variant="primary" className="carousel-btn">Previous</Button>
            <Button variant="primary" className="carousel-btn">Next</Button> */}
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Fourth slide" />
            <Carousel.Caption>
              {/* <Button variant="primary" className="carousel-btn">Previous</Button>
            <Button variant="primary" className="carousel-btn">Next</Button> 
            </Carousel.Caption>
          </Carousel.Item> */}
          {/* <Carousel.Item>
          <img className="d-block w-100" src={img5} alt="Fifth slide" />
          <Carousel.Caption>
            <Button variant="primary" className="carousel-btn">Previous</Button>
            <Button variant="primary" className="carousel-btn">Next</Button>
          </Carousel.Caption>
        </Carousel.Item> */}
        </Carousel>
      </div>

      <div className="container" style={{ marginTop: "30px", marginBottom: "30px" }}>
        <div className="section-heading">
          <p style={{ fontWeight: "bold", fontSize: "50px" }}>Who Are We?</p>
          <hr style={{ margin: "auto", marginBottom: "20px", width: "150px", borderBottom: "4px solid", color: "#fd7e14" }} />
        </div>


        <div style={{ textAlign: "center", fontSize: "20px" }}>

          Buidlmart is a one-stop solution for all your construction material requirements. With world class manufacturing units and Innovation Center, we revolutionize construction products from foundation to finish. We provide a variety of building materials and lifestyle products that elevate interiors through our robust B2B, retail and B2C network . We are one of Asia's fastest-growing construction solution companies transforming the ecosystem through technology.

        </div>

      </div>

      {/* <div className="container">


        <div style={{ marginBottom: "25px" }}>
          <p style={{ fontSize: "35px" }}> <span style={{ color: "red"}}>HOW YOU GET </span>ADVANTAGES?</p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "200px", padding: "20px", border: "1px solid #ccc", borderRadius: "7px", marginLeft:"200px", backgroundColor:"#FDDDB8"}}>
            <h4>Get Right Products</h4>
            <div>
              <p style={{ fontWeight: "400" }}>Choose the right product or services through well-organized catalogs.</p>
            </div>
          </div>
          <div style={{ width: "200px", padding: "20px", border: "1px solid #ccc", borderRadius: "7px" ,backgroundColor:"#FDF5AD" }}>
            <h4>Get Right Quality</h4>
            <div>
              <p style={{ fontWeight: "400" }}>Quality assured from third party test certificates as well as from us.</p>
            </div>
          </div>
          <div style={{ width: "200px", padding: "20px", border: "1px solid #ccc", borderRadius: "7px", marginRight:"200px", backgroundColor:"#FDDDB8"}}>
            <h4>Get Right Price</h4>
            <div>
              <p style={{ fontWeight: "400" }}>Finalize your Quotation, choose pricing according to various brands.</p>
            </div>
          </div>

        </div>



      </div> */}
       <div className="container">


<div>
  <p style={{ fontSize: "35px", marginBottom:"30px" }}> <span style={{ color: "red" }}>HOW YOU GET </span>ADVANTAGES?</p>
</div>

<div style={{ display: "flex", justifyContent: "space-between" }}>
  <div style={{ width: "200px", padding: "20px", border: "1px solid #ccc", borderRadius: "7px", marginLeft:"200px", backgroundColor:"#FDDDB8"}}>
    <h4>Get Right Products</h4>
    <div>
      <p style={{ fontWeight: "400" }}>Choose the right product or services through well-organized catalogs.</p>
    </div>
  </div>
  <div  style={{ width: "200px", padding: "20px", border: "1px solid #ccc", borderRadius: "7px" ,backgroundColor:"#FDF5AD" }}>
    <h4>Get Right Quality</h4>
    <div>
      <p style={{ fontWeight: "400" }}>Quality assured from third party test certificates as well as from us.</p>
    </div>
  </div>
  <div style={{ width: "200px", padding: "20px", border: "1px solid #ccc", borderRadius: "7px", marginRight:"200px", backgroundColor:"#FDDDB8"}}>
    <h4>Get Right Price</h4>
    <div>
      <p style={{ fontWeight: "400" }}>Finalize your Quotation, choose pricing according to various brands.</p>
    </div>
  </div>

</div>



</div>




    </div>
    
  );
}
