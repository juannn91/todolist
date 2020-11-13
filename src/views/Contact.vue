<template>
  <div class="contact">
    <div>
      <h2 id="mainTitle">Contact Us!</h2>
    </div>
    <div>
      <b-card id='inputCard'>
        <h4 class="card-title">Question? Send Us a Message</h4>
        <div>
          <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
          <div class="mt-2">Value: {{ text }}</div>
        </div>
        <div>
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
          <pre class="mt-3 mb-0">{{ text }}</pre>
        </div>
        <b-card-text id='enterDiv'>
          <p>Thanks for Sharing!</p>
          <a id='enter' href="#" class="btn btn-outline-danger">Enter</a>
        </b-card-text>
        <b-card-text id='signDiv'>
          <p>Want to create an account?</p>
          <a href="#">Sign Up</a>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
  
  export default {
    data() {
      return {
        text: ''
      }
    }
  }
</script>

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

  .container {
    margin-bottom: 50;
  }

</style>