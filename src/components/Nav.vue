<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand"> Shopping Cart </router-link>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link tag="li" :to="{ path: '/index'}" active-class="active"><a> iPhone 6S <span class="sr-only">(current)</span></a></router-link>
          <router-link tag="li" :to="{ path: '/cart'}" active-class="active"><a> 购物车 <span class="badge text-danger" v-text="totalItem" v-if="totalItem"></span></a></router-link>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>
<style media="screen">
  .text-danger {
    color: #fff;
    background-color: #d9534f;
  }
</style>
<script>
import { mapState } from 'vuex'

export default {
  name: 'nav',

  computed: {
    ...mapState({
      cart: ({cart}) => cart.cart
    }),
    totalItem () {
      return this.cart.length
    }
  }
}
</script>
