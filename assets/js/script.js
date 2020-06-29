const products = [
  		{ id: 1, description: 'Razor Blade', price: 10 },
  		{ id: 2, description: 'Coffee Mug', price: 20 },
  		{ id: 3, description: 'USB Stick', price: 5 },
  		{ id: 4, description: 'Amazing Dildo', price: 35 },
  		{ id: 5, description: 'Oui', price: 35 },
  		{ id: 6, description: 'Yes', price: 35 },
  		{ id: 7, description: 'Trop bien', price: 35 },
  		{ id: 8, description: "C'est cool", price: 35 },
  		{ id: 9, description: 'Yoyo', price: 35 },
  		{ id: 10, description: 'Try it', price: 35 },
];


// component 
const List = {
  template: '#product-list',
  data: function () {
    return {products: products, searchKey: ''};
  },
  computed: {
    // filteredProducts: function () {
    //   return this.products.filter(function (product) {
    //     return product.name.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1
    //   })
    // }
  }
};



const Product = {
  template: '#product',
  // data: function(){
  //     return {product: findProduct(this.$route.params.product_id)};
  // }
};


const HeaderComponent = {
  template: `    
    <header>
      <div id="logo"><a href="#"><img src="./assets/img/wish-logo-800.png" alt=""></a></div>
      <ul id="icons">
        <li><i class="fas fa-user"></i></li>
        <li>
          <router-link :to="{name: 'WishList'}">
            <i class="fas fa-heart"></i>
          </router-link>
        </li>
        <li><i class="fas fa-shopping-cart"></i></li>
      </ul>
    </header>`,
  name: 'HeaderComponent'
};

const WishList = {
  template: 
  `
    <h1>Hello from wish list</h1>
  `
};

// router
const router = new VueRouter({
  routes: [   
    { path: '/', component: List },
    { path: '/product' , component: Product, name: 'product' },
    { path: '/wish-list', component: WishList }
  ]
})

const app = new Vue({
  router
}).$mount('#app')