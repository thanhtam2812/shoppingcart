function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const product = [
    {
        id: makeid(10),
        name: 'Jordan 1 High Dark Mocha',
        size: '45 US',
        price: 8000000,
        urlImg: './assets/product-image/jordan 1 dark mocha.jpg'
    },
    {
        id: makeid(10),
        name: 'Jordan 1 High Spider Man',
        size: '43 US',
        price: 10000000,
        urlImg: './assets/product-image/jordan 1 high spider man.jpg'
    },
    {
        id: makeid(10),
        name: 'Jordan 1 High Travis Scott',
        size: '42 US',
        price: 30000000,
        urlImg: './assets/product-image/Jordan-1-Retro-High-Travis-Scott.jpg'
    },
]

localStorage.setItem('product', JSON.stringify(product))