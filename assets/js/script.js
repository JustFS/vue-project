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
const Home = {
  template: '#home',
  name: 'Home',
  data: function(){
    return {products, searchKey: null}
  },
  
    computed: {
      filterProduct(){
          return this.products.filter(result => {
              const myRegex = new RegExp(this.searchKey, 'gi');
              return (result.description.match(myRegex)); 
          })
      }
  }
}
console.log(this.searchKey);


const WishList = {
  template: '#wish-list',
  name: 'WishList'
};
const ShoppingCart = {
  template: '#shopping-cart',
  name: 'ShoppingCart'
}

// router
const router = new VueRouter({
  routes: [   
    { path: '/', component: Home, name:'Home' },
    { path: '/wish-list', component: WishList, name:'WishList' },
    { path: '/shopping-cart', component: ShoppingCart, name:'ShoppingCart'}
  ]
})

const vue = new Vue({
  router
}).$mount('#app');
