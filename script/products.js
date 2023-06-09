let catalog= [{
    id:1,
    title:'Bottega Fragolino Rosso 750ml',
    image: 'https://i.postimg.cc/cH0kjJ2j/Screenshot-2023-06-09-153701.png',
    description: 'Limited Edition Giftbox.This sparkling wine is reowned for its unmistakable flavour of freshly-picked wild strawberries.The Fragolino Rosso is Sweet, fresh, lively, with intense hints of wild strawberries and fruit. Suitable at any time of the day, it is also an excellent aperitif.',
    price: 'R 209,00' ,
    link1: '',
},
]

let divCatalog = document.querySelector('.catalog');
catalog.forEach((data)=> {
    divCatalog.innerHTML += 
    `<div class="col column">
    <div class="card"">
    <div class="card-body">
    <p class="text-black">
    ${data.title}
    </p>
    <p class="text-black">
    <img src= "${data.image}" class="img-fluid">
    </p>
    <p class="text-black">${data.description}</p>
    <p class="text-black">${data.price}</p>
    <a href=${data.link1} role="button" class="btn">Add To Cart</a>
    </div>
    </div>
    </div> `
})