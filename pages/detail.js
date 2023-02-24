let params = new URLSearchParams(document.location.search)
let string = params.get("name").toLowerCase()
let productContent = ''

const product = JSON.parse(localStorage.getItem('product'))
const deatilProduct = product.filter(x => x.name.toLowerCase().indexOf(string) > -1)
console.log(deatilProduct);

deatilProduct.forEach(e => {
    productContent += `
    <div class="col-12 col-md-6 col-xl-7">
        <div class="row g-3" data-aos="fade-right">
            <div class="col-12">
                <picture>
                    <img class="img-fluid" data-zoomable src="${e.urlImg}" alt="HTML Bootstrap Template by Pixel Rocket">
                </picture>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-5">
        <div class="sticky-top top-5">
            <div class="pb-3" data-aos="fade-in">
                
                <h1 class="mb-1 fs-2 fw-bold">${e.name}</h1>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="fs-4 m-0">${e.price}</p>
                </div>
                <div class="border-top mt-4 mb-3 product-option">
                <button class="btn btn-dark w-100 mt-4 mb-0 hover-lift-sm hover-boxshadow">Add To Cart</button>
                <!-- / Product Accordion-->
                </div>                    
            </div>
        </div>
    </div>
    `
});
console.log(productContent);
document.getElementById('product-content').innerHTML = productContent