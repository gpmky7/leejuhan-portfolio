document.getElementById('hamburger-menu').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".maintw-box");

    products.forEach(product => {
        const productId = product.getAttribute("data-product");
        const image = document.getElementById(`productImage-${productId}`);
        const radios = product.querySelectorAll("input[type='radio']");

        radios.forEach(radio => {
            radio.addEventListener("change", function () {
                const color = this.value;
                image.src = `images/buzz${productId}-${color}.png`;
            });
        });
    });
});

