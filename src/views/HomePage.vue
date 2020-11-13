<template>
  <div>
    <div class="container">
     
      <div class="body-titles">
        <h2 id="titleOne">Kerika is built for Remote Teams</h2>
        <p>Task Boards and Whiteboards</p>
        <iframe
          width="100%"
          height="515"
          src="https://www.youtube.com/embed/J_eKEow7XAo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div class="body-titles">
        <h2 id="titleTwo">Simple enough for everyone to adopt</h2>
        <p>Task Boards and Whiteboards</p>

        <div class="imagesContainer">
          <div>
            <img src="img/person1.JPG" width="250" height="330" alt="" />

            <p>Joy said buh-bye to SharePoint</p>

            <button class="btn btn-light">MEET JOY</button>
          </div>
          <div>
            <img src="img/person2.JPG" width="250" height="330" alt="" />
            <p>Joy said buh-bye to SharePoint</p>

            <button class="btn btn-light">MEET JOY</button>
          </div>
          <div>
            <img src="img/person3.JPG" width="250" height="330" alt="" />
            <p>Joy said buh-bye to SharePoint</p>

            <button class="btn btn-light">MEET JOY</button>
          </div>
        </div>
      </div>

      <div class="body-titles">
        <h2 id="titleThree">Real impact, for real people</h2>
        <p>This is what our users have to say about Kerika</p>
        <iframe
          width="100%"
          height="515"
          src="https://www.youtube.com/embed/FVSAN8PRMc0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="ContainerSlider">
      <div class="body-titles">
        <h2 id="titleFour">The right tools for every kind of project</h2>
        <p>Task Boards & Whiteboards</p>
      </div>

      <div class="buttonContainer">
        <button id="butoonSliderOne" class="btn btn-white">
          <i class="fas fa-align-justify"></i> READ:FANTASTIC FEATURES
        </button>
        <button id="butoonSliderTwo" class="btn btn-danger">
          <i class="fas fa-caret-right"></i>

          WATCH: A QUICK REVIEW
        </button>
      </div>

      <div class="slider">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-70"
                src="img/slider1.JPG"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-70"
                src="img/slider2.JPG"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-70"
                src="img/slider3.JPG"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>

    <div class="body-titles">
      <h2 id="titleFive">Real impact, for real people</h2>
      <p>This is what our users have to say about Kerika</p>

      <button id="lastButton" class="btn btn-danger">Try Kerica</button>
    </div>
  </div>
</template>

<style>
body {
  background: black;
}

.navbar-nav a {
  color: crimson;
  margin-left: 11%;
}

.navbar-brand {
  margin-right: 120px;
}

nav button {
  margin-right: 7px;
}

.body-titles {
  margin-top: 1%;
  margin-bottom: 3%;
  padding-top: 2%;
}

.body-titles p {
  display: flex;
  justify-content: center;
}

.body-titles #titleOne {
  margin-top: 50px;
  color: darkgreen;
  display: flex;
  justify-content: center;
}

.body-titles #titleTwo {
  margin-top: 50px;
  color: rgba(12, 111, 223, 0.904);
  display: flex;
  justify-content: center;
}

.body-titles #titleThree {
  margin-top: 50px;
  color: rgb(248, 139, 7);
  display: flex;
  justify-content: center;
}

.body-titles #titleFour {
  margin-top: 2px;
  color: white;
  display: flex;
  justify-content: center;
}

.body-titles #titleFive {
  margin-top: 50px;
  color: rgba(12, 111, 223, 0.904);
  display: flex;
  justify-content: center;
}

.body-titles .imagesContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.body-titles .imagesContainer div {
  margin-left: 5.2%;
  margin-right: 5.2%;
}

.imagesContainer p {
  color: crimson;
}

.imagesContainer button {
  position: relative;
  left: 30%;
  color: blue;
  border-style: solid;
}

.ContainerSlider {
  background-color: deepskyblue;
}

.buttonContainer {
  display: flex;
  justify-content: center;
}

.buttonContainer #butoonSliderOne {
  background-color: white;
  color: rgba(40, 40, 238, 0.911);
  margin-right: 20px;
}

.slider {
  margin: 5% 5% 5% 5%;
  padding-bottom: 5%;
}

#lastButton {
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 20px;
  position: relative;
  left: 45%;
}

footer div {
  display: flex;
  justify-content: space-between;
}

footer div ul li {
  list-style: none;
}

footer div ul {
  list-style: none;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 9%;
}
</style>
<script>
// @ is an alias to /src

export default {
  name: "HomePage",
  components: {},
};
</script>

