let params = new URLSearchParams(document.location.search)
let keyword = params.get("keyword")
const searchLowerCase = keyword.toLowerCase()
let searchContent = ''

const searchResult = product.filter(x => x.name.toLowerCase().indexOf(searchLowerCase) > -1)

searchResult.forEach((e) => {
    searchContent += `
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
                <p class="text-decoration-none link-cover">${e.name}</p>
                        <p class="mt-2 mb-0 small">${e.price}</p>
            </div>
        </div>
    </div>`
})

document.getElementById('product-content').innerHTML = searchContent