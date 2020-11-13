<template>
  <div id="app">
    <b-navbar type="light" class="my-navbar">
      <b-navbar-brand>
        <div class="logo"></div>
      </b-navbar-brand>
      <b-collapse is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Features</b-nav-item>
          <b-nav-item to="/Users">Users</b-nav-item>
          <b-nav-item to="/about">Price</b-nav-item>
          <b-nav-item to="/about">Suport</b-nav-item>
          <b-nav-item disabled to="/about">Blog</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container">
    <router-view />
</div>
    <footer class="footer">
      <div>
        <b-nav vertical class="w-25">
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Another Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>
      <div>
        <b-nav vertical class="w-25">
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Another Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>
      <div>
        <b-nav vertical class="w-25">
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Another Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
.logo {
  width: 106px;
  height: 53px;
  background-image: url(./assets/kerika_logo.svg);
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}

.footer{
  display: flex;
  width: 100%;
  position: absolute;
  padding: 56px;
  bottom: 0px;
  background: #F9F9F9;
  >div{
    flex: 1;
  }
}

.container{
  padding-top: 20px;
}

.navbar-light .navbar-nav .nav-link{
  color: #B91C52 !important;
  text-transform: uppercase;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
