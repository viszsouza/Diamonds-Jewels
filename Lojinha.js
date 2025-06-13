const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const navlist = document.querySelector(".nav-list");
const close = document.querySelector(".close");
const modal = document.querySelector("#cart-modal");
const cartBtn = document.querySelector("#cart-btn");

const cartItems = document.getElementById('cart-items');
const totalPriceElem = document.getElementById('total-price');
const cartCountElem = document.getElementById('cart-count');
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const checkoutBtn = document.getElementById('checkout');

let cart = [];

navlist.addEventListener("click", () => nav.classList.toggle("active"));
hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

close.addEventListener("click", () => modal.style.display = "none");
cartBtn.addEventListener("click", () => modal.style.display = "flex");

const updateCart = () => {

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPriceElem.textContent = total.toFixed(2);
    cartCountElem.textContent = cart.length;
};

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const productElement = e.target.closest('.product');
        const productName = productElement.dataset.name;
        const productPrice = parseFloat(productElement.dataset.price);

        cart.push({name: productName, price: productPrice});

        updateCart();
    });
});

const myObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach( (entry) => {
            if (entry.isIntersecting === true){
                entry.target.classList.add('show')
            }
        })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach( (element) => myObserver.observe(element))