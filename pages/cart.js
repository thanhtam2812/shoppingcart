function loadCart() {
    return JSON.parse(localStorage.getItem('cart'))
}

const cart = loadCart()

renderCart(cart)

function renderCart(data) {
    let cartContent = ''
    data.forEach((e) => {
    cartContent += `
        <div class="row mx-0 py-4 g-0 border-bottom">
            <div class="col-2 position-relative">
                    <span class="checkout-item-qty">${e.quantity}</span>
                <picture class="d-block border">
                    <img class="img-fluid" src="${e.img}" alt="HTML Bootstrap Template by Pixel Rocket">
                </picture>
            </div>
            <div class="col-9 offset-1">
                <div>
                    <h6 class="justify-content-between d-flex align-items-start mb-2">
                        ${e.name}
                        <i class="ri-close-line ms-3"></i>
                    </h6>
                    <span class="d-block text-muted fw-bolder text-uppercase fs-9">Qty: ${e.quantity}</span>
                </div>
                <p class="fw-bolder text-end text-muted m-0">${e.subTotal}</p>
            </div>
        </div>
        `
    })
    document.getElementById("cart-content").innerHTML = cartContent
}