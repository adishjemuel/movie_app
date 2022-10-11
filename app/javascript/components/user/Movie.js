import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
const Movie = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar user={props.user} />

      <div
        class="my-5 w-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0 ,0 ,0, 0.5), rgba(0, 0, 0, 0.5)),url(https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg)",
          height: "23rem",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        //   filter: 'blur(2px)'
          //   position: 'relative'
        }}
      >
        <div class="container"> 
           <div class="row pt-4"> 
              <div class="col-4" style={{width:'15rem'}}> 
                <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg" className="img-fluid"/>
              </div>
              <div class="col-8 text-light">
                <h1> asdasdasdasdsa</h1>
             </div> 
           </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Movie;
