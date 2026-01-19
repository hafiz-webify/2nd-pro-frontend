import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Box, Stack, Button } from "@mui/material";
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
function Change() {
  return (
    <div className="w-full pt-16">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://baroque.pk/cdn/shop/files/MAin_BAnner21_f61fbfdf-74f0-448a-8086-3a0cd73825a7.jpg?v=1762345586&width=1400"
            alt="First slide"
          />
          <Carousel.Caption>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="flex-end"
              minHeight="100vh"
              pb={4} // padding from bottom
            >
              <Stack spacing={2} direction="row">
 <Link to = "/products" >
                <Button
                  variant="outlined"
                  sx={{
                    position: "relative",
                    color: "#8b7d6b",
                    borderColor: "#8b7d6b",
                    fontFamily: "serif",
                    fontSize: "18px",
                    padding: "12px 35px",
                    overflow: "hidden",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "transparent",
                      borderColor: "white",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: 0,
                      height: 0,
                      background: "rgba(139, 125, 107, 0.2)",
                      borderRadius: "50%",
                      transform: "translate(-50%, -50%)",
                      transition: "width 0.4s ease, height 0.4s ease",
                      zIndex: 0,
                    },
                    "&:hover::before": {
                      width: "300%",
                      height: "300%",
                    },
                    "& > span": {
                      position: "relative",
                      zIndex: 1,
                      textTransform: "capitalize",
                    },
                  }}
                >
                <span>Shop Now</span>
                </Button>
                </Link>
              </Stack>
            </Box>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://baroque.pk/cdn/shop/files/MAin_BAnner13_dbb2167f-4020-45c0-8d0a-be8f3d303f81.jpg?v=1759323540&width=1400"
            alt="Second slide"
          />
          <Carousel.Caption>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="flex-end"
              minHeight="100vh"
              pb={4} // padding from bottom
            >
              <Stack spacing={2} direction="row">
<Link to = "/products" >
                <Button
                  variant="outlined"
                  sx={{
                    position: "relative",
                    color: "#8b7d6b",
                    borderColor: "#8b7d6b",
                    fontFamily: "serif",
                    fontSize: "18px",
                    padding: "12px 35px",
                    overflow: "hidden",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "transparent",
                      borderColor: "white",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: 0,
                      height: 0,
                      background: "rgba(139, 125, 107, 0.2)",
                      borderRadius: "50%",
                      transform: "translate(-50%, -50%)",
                      transition: "width 0.4s ease, height 0.4s ease",
                      zIndex: 0,
                    },
                    "&:hover::before": {
                      width: "300%",
                      height: "300%",
                    },
                    "& > span": {
                      position: "relative",
                      zIndex: 1,
                      textTransform: "capitalize",
                    },
                  }}
                >
                  <span>Shop Now</span>
                </Button>
                </Link>
              </Stack>
            </Box>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/b/a/banner_156.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="flex-end"
              minHeight="100vh"
              pb={4} // padding from bottom
            >
              <Stack spacing={2} direction="row">
<Link to = "/products" >
                <Button
                  variant="outlined"
                  sx={{
                    position: "relative",
                    color: "#8b7d6b",
                    borderColor: "#8b7d6b",
                    fontFamily: "serif",
                    fontSize: "18px",
                    padding: "12px 35px",
                    overflow: "hidden",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "transparent",
                      borderColor: "white",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: 0,
                      height: 0,
                      background: "rgba(139, 125, 107, 0.2)",
                      borderRadius: "50%",
                      transform: "translate(-50%, -50%)",
                      transition: "width 0.4s ease, height 0.4s ease",
                      zIndex: 0,
                    },
                    "&:hover::before": {
                      width: "300%",
                      height: "300%",
                    },
                    "& > span": {
                      position: "relative",
                      zIndex: 1,
                      textTransform: "capitalize",
                    },
                  }}
                >
                  <span>Shop Now</span>
                </Button>
                </Link>
              </Stack>
            </Box>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container-fluid">
        {" "}
        <h1 className="text-capitalize text-center pt-5 pb-4">
          {" "}
          OWN YOUR NEW LOOK{" "}
        </h1>{" "}
        <div className="row">
          {" "}
          <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 col-12">
            {" "}
            
              {" "}
              <div className="overflow-hidden pt-5">
                <Link to = "/products">
                <img
                  src="https://baroque.pk/cdn/shop/files/49_f9950123-4d29-4652-bf4d-23a3697fa453.jpg?v=1762510543&width=800"
                  alt=""
                  className="w-full transition-transform duration-500 ease-in-out hover:scale-110"
                />{" "}
                </Link>
              </div>{" "}
             {" "}
          </div>{" "}
          <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 col-12">
            {" "}
             
              {" "}
              <div className="overflow-hidden pt-5">
                {" "}
                <Link to = "/products"> 
                <img
                  src="https://baroque.pk/cdn/shop/files/54_81ad5251-94e6-4d31-85f0-84b168b1c59f.jpg?v=1762514774&width=800"
                  alt=""
                  className="w-full transition-transform duration-500 ease-in-out hover:scale-110"
                />{" "}
                </Link>
              </div>{" "}
            {" "}
          </div>{" "}
        </div>{" "}
      </div> {" "}
      <div className="container-fluid pb-10">
        {" "}
        <h1 className="text-capitalize text-center pt-5 pb-4">
          {" "}
          Ready To Wear{" "}
        </h1>{" "}
        <div className="row">
          {" "}
          <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 col-12 overflow-hidden">
            {" "}
             
               
              <div className="pic pt-5">
                {" "}
                <Link to = "/products"> 
                <img
                  src="https://baroque.pk/cdn/shop/files/71_c53e4747-e273-45b4-b764-0af8974dbf99.jpg?v=1762510643&width=800"
                  alt=""
                  className="img-fluid transition-transform duration-500 ease-in-out hover:scale-110"
                />{" "}
                </Link>
              </div>{" "}
            {" "}
          </div>{" "}
          <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 col-12 overflow-hidden">
            {" "}
           
              {" "}
              <div className="pic pt-5">
                {" "}
                <Link to = "/products"> 
                <img
                  src="https://baroque.pk/cdn/shop/files/69_b97cc7b8-6dcb-4842-87e0-0a190aa78b22.jpg?v=1762510465&width=800"
                  alt=""
                  className="img-fluid transition-transform duration-500 ease-in-out hover:scale-110"
                />{" "}
                </Link>
              </div>{" "}
            {" "}
          </div>{" "}
          <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 col-12 overflow-hidden">
            {" "}
          
              {" "}
              <div className="pic pt-5">
                {" "}
                <Link to = "/products"> 
                <img
                  src="https://baroque.pk/cdn/shop/files/67_df3fb5aa-7ead-403f-a2ad-a56ceb1ad887.jpg?v=1762510430&width=800"
                  alt=""
                  className="img-fluid transition-transform duration-500 ease-in-out hover:scale-110"
                />{" "}
                </Link>
              </div>{" "}
          
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="container-fluid pb-10">
        {" "}
        <h1 className="text-capitalize text-center pt-5">newsletter</h1>{" "}
        <h5 className="text-capitalize text-center mb-4">
          {" "}
          Sign up to get notified and Get 5% OFF when you subscribe to our
          newsletter.{" "}
        </h5>{" "}
        <form className="text-capitalize text-center flex justify-center gap-2">
          {" "}
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-3 py-2"
          />{" "}
          <button
            id="news"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-300"
          >
            {" "}
            <span className="text-capitalize">subscribe</span>{" "}
          </button>{" "}
        </form>{" "}
      </div>
      <Outlet/>
    </div>
  );
}

export default Change;

