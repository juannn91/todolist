<template>
  <div class="contact">
    <div>
      <h2 id="mainTitle">Contact Us!</h2>
    </div>
    <div class='container'>
      <div class="card" id='inputCard'>
        <h4 class="card-title">Question? Send Us a Message</h4>
        <div class="card-body">
          <input class='form-control' placeholder='Your Email' type="text">
          <textarea class="form-control rounded-0" placeholder='Type your Message' type=""></textarea>
        </div>
        <div id='enterDiv'>
          <p>Thanks for Sharing!</p>
          <a id='enter' href="#" class="btn btn-outline-danger">Enter</a>
        </div>
        <div id='signDiv'>
          <p>Want to create an account?</p>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  * {
    box-sizing: border-box;
  }

  .contact {
    background-color: rgb(240, 234, 234);
  }

  #mainTitle {
    margin-top: 50px;
    color: darkgreen;
    display: flex;
    justify-content: center
  }

  .navbar-nav a {
    color: red;
    margin-left: 10%;
  }

  nav button {
    margin-right: 7px;
  }

  #inputCard {
    background-color: #ffffff;
    width: 65%;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 10%;
  }

  .card-body input {
    margin-bottom: 5%;
  }

  #enter {
    margin-top: 5%;
  }

  #signDiv {
    display: flex;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
    font-size: 14px;
  }

  #enterDiv {
    display: flex;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
    font-size: 14px;
  }

  h4,
  .card-title {
    text-align: center;
    color: darkgreen;
    margin-top: 20;
  }
</style>