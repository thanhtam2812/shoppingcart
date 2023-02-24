function loadCart() {
    return JSON.parse(localStorage.getItem('cart'))
}

function loadProduct() {
    return JSON.parse(localStorage.getItem('product'))
}

function loadUser() {
    return localStorage.getItem('currentUser')
}

let product = loadProduct()
let cart = loadCart()
let user = loadUser()
let carts = []

renderCart(cart)
renderProduct(product)

function renderProduct(data) {
    let productContent = '';
    data.forEach((e) => {
        productContent += `
        <div class="col-12 col-sm-6 col-lg-4">  
            <button type="button" class="add-to-cart" data-id="${e.id}" data-price="${e.price}" data-name="${e.name}" data-img="${e.urlImg}">Add To Cart</button>
            <div class="card border border-transparent h-100 transparent">
                <div class="card-img position-relative">
                    <span class="position-absolute top-0 end-0 p-2 z-index-20 text-muted"><i class="ri-heart-line"></i></span>
                    <picture class="position-relative overflow-hidden d-block bg-light">
                        <img class="w-100 img-fluid position-relative z-index-10" title="" src="${e.urlImg}" alt="">
                    </picture>
                </div>
                <div class="card-body px-0">
                    <a class="text-decoration-none link-cover" href="/product.html?name=${e.name.toLowerCase()}">${e.name}</a>
                    <p class="mt-2 mb-0 small">${e.price}</p>
                </div>
            </div>
        </div>`
    })
    document.getElementById('product-content').innerHTML = productContent
}

document.addEventListener('click', (evt) => {
    const classTarget = evt.target
    const searchInput = document.getElementById('search-input')
    // them san pham vao gio hang
    if (classTarget.classList.contains('add-to-cart')) {
        let id = classTarget.dataset.id
        let name = classTarget.dataset.name
        let price = classTarget.dataset.price
        let img = classTarget.dataset.img

        const cartItem = {
            id,
            name,
            price,
            quantity: 1,
            subTotal: parseInt(price),
            img
        }
        const idx = carts.findIndex(x => x.name === name)
        if (idx === -1) {
            carts.push(cartItem)
        } else {
            carts[idx].quantity++
            let quantityItem = carts[idx].quantity
            let priceItem = carts[idx].price
            carts[idx].subTotal = parseInt(quantityItem) * parseInt(priceItem)
        }
        localStorage.setItem('cart', JSON.stringify(carts))
        renderCart(carts)
    }
    if (classTarget.classList.contains('btn-search')) {
        window.location.assign('/search.html?keyword=' + searchInput.value)
        searchInput.value = ''
    }
    if (classTarget.classList.contains('logout')) {
        localStorage.setItem('currentUser', '')
        window.location.reload()
    }
})

function renderCart(data) {
    let cartContent = ''
    let qtyContent = ''
    let priceContent = ''

    if (!data) {
        cartContent += "No item"
        qtyContent += 'Cart (0)'
        priceContent += '0'
    } else {
        const sumQty = data.reduce((acc, curr) => acc + curr.quantity, 0)
        const sumPrice = data.reduce((acc, curr) => acc + parseInt(curr.subTotal), 0)
        data.forEach((e) => {
            cartContent += `
            <div class="row mx-0 py-4 g-0 border-bottom">
                <div class="col-2 position-relative">
                    <picture class="d-block ">
                        <img class="img-fluid" src="${e.img}" alt="HTML Bootstrap Template by Pixel Rocket">
                    </picture>
                </div>
                <div class="col-9 offset-1">
                    <div>
                        <h6 class="justify-content-between d-flex align-items-start mb-2">
                            ${e.name}
                            <i class="ri-close-line ms-3"></i>
                        </h6>
                        <span class="d-block text-muted fw-bolder text-uppercase fs-9">Size: 11 / Qty: ${e.quantity}</span>
                    </div>
                    <p class="fw-bolder text-end text-muted m-0">${e.price}</p>
                </div>
            </div>
            `
        })
        qtyContent += `Cart (${sumQty})`
        priceContent += `<p class="m-0 fs-5 fw-bold">${sumPrice}</p>`
    }
    document.getElementById("cart-content").innerHTML = cartContent
    document.getElementById('cart-qty').innerHTML = qtyContent
    document.getElementById('price-content').innerHTML = priceContent
}

if (user.length > 0) {
    document.getElementById('auth').innerHTML = '<span class="logout">Logout</span>'
} else {
    document.getElementById('auth').innerHTML = '<a href="/login.html">Login</a>'
}