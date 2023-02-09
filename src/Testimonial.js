import React from "react";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h2> Clients Testimonial</h2>
      <lord-icon
    src="https://cdn.lordicon.com/gqqykmqo.json"
    trigger="hover"
    style={{width:"100px",height:"100px",textAlign:"center"}}>
</lord-icon>
    <p style={{fontWeight:"500"}}>Gaurav</p>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <p style={{ padding: "1rem" }}>
              Deserunt sunt sunt et laborum. Labore occaecat quis pariatur velit
              deserunt cupidatat magna Lorem aliqua magna id. Minim do voluptate
              tempor tempor eiusmod dolore nostrud Lorem pariatur mollit.
              Officia aliqua magna proident commodo et. Consectetur culpa
              consequat enim laboris duis id esse non.
            </p>
          </div>
          <div className="carousel-item">
            <p style={{ padding: "1rem" }}>
              Enim adipisicing do proident elit consectetur aliquip sint duis
              mollit non fugiat. Aliqua sunt proident cupidatat ipsum. Aute quis
              laborum officia minim consequat elit esse do. Cupidatat irure
              velit non incididunt. Reprehenderit cillum sit tempor consequat
              irure aliqua dolore. Dolor cillum elit exercitation deserunt
              excepteur pariatur irure officia anim enim ea. Sunt non velit
              velit reprehenderit proident exercitation enim non aute anim enim.
            </p>
          </div>
          <div className="carousel-item">
            <p style={{ padding: "1rem" }}>
              Quis quis officia non ullamco eiusmod consequat aliqua. Dolor
              tempor commodo consectetur cillum eu sunt sit mollit cupidatat.
              Labore qui duis ut sunt tempor ea anim ex sunt enim in velit ad.
              Aute aute incididunt ut mollit dolore est do magna quis pariatur
              ut proident. Proident minim non consequat labore do Lorem nulla
              est dolore. Est incididunt officia ipsum consequat eiusmod
              occaecat ut ea.
            </p>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-visible">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
