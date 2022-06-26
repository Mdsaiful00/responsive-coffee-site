let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  icons.classList.remove('active');
  cartItemsContainer.classList.remove('active')
}

let cartItemsContainer = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
  cartItemsContainer.classList.toggle('active');
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
  icons.classList.remove('active');
}

let loginBox = document.querySelector('.login-box');
document.querySelector('#user-btn').onclick = () => {
  loginBox.classList.toggle('active');
  searchForm.classList.remove('active');
  icons.classList.remove('active');
  cartItemsContainer.classList.remove('active');
  navbar.classList.remove('active');


}

let navbar = document.querySelector('.navbar');
document.querySelector('#bars-btn').onclick = () => {
  navbar.classList.toggle('active');
  loginBox.classList.remove('active');
  searchForm.classList.remove('active');
  cartItemsContainer.classList.remove('active');
  icons.classList.remove('active');

}