let catalog= [{
    id:1,
    title:'Bottega Fragolino Rosso 750ml',
    image: 'https://i.postimg.cc/cH0kjJ2j/Screenshot-2023-06-09-153701.png',
    price: 'R 209,00' ,
    modal: 'Limited Edition Giftbox.This sparkling wine is reowned for its unmistakable flavour of freshly-picked wild strawberries.The Fragolino Rosso is Sweet, fresh, lively, with intense hints of wild strawberries and fruit. Suitable at any time of the day, it is also an excellent aperitif.',
},
]

// <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>
let divCatalog = document.querySelector('.catalog');
catalog.forEach((data)=> {
    divCatalog.innerHTML += 
    `<div class="col column">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <p class="text-black card-title">
    ${data.title}
    </p>
    <img src= "${data.image}" class="img-fluid">
    </p>
    <p class="text-black">${data.price}</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Read More
    </button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ${data.modal}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    <a href="/html/checkout.html" role="button" class="btn">Add To Cart</a>
    </div>
    </div>
    </div> `
})