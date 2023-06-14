let data = JSON.parse(localStorage.getItem("products"))
  // ? JSON.parse(localStorage.getItem("products"))

showProducts();

function showProducts() {
  Object.keys(data).forEach((products) => {
    let stuff = data[products];
    let p = document.querySelector("#admin");
    console.log(data[products]);
    p.innerHTML += `
        <div class="table">
        <tbody id="admin">
        <tr>
        <th scope="col" class="id">${stuff.id}</th>
        <td scope="col" class="title">${stuff.title}</td>
        <td scope="col" class="pics"> <img src="${stuff.image}"  alt="" loading="lazy" class="adminPics" ></td>
        <td scope="col" class="prices">${stuff.price}</td>
        <td scope="col"><button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#editModal">
        Edit
      </button>
      <!-- Modal -->
      <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="editModalLabel">Edit your product</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">ID:</label>
              <input type="ID" class="form-control" id="idAdmin${stuff.id}" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Product name:</label>
              <input type="Product" class="form-control" id="name${stuff.id}" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Image URL:</label>
              <input type="text" class="form-control" id="imageUrl${stuff.id}" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Price:</label>
              <input type="number" class="form-control" id="priceAdmin${stuff.id}" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Description</label>
              <input type="Price" class="form-control" id="adminDesc${stuff.id}" aria-describedby="emailHelp">
            </div>
          </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" id="saveBtn">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </td>
        <td scope="col"><button class="del" id="delete">X</button></td>
        </tr>
        </tbody>
        </div>
        `;
  });
  deleteItems();
  editItems();
}

// delete button 
function deleteItems() {
const deleteButtons = [...document.querySelectorAll("#delete")];
deleteButtons.forEach((dell, i) => {
  dell.addEventListener("click", (e) => {
    console.log(e.target);
    let row = e.target.parentElement.parentElement;
    console.log(row);
    row.remove();
    data.splice(e.target[i], 1);
    localStorage.setItem("products", JSON.stringify(data));
    console.log(data);
  });
});
}
// Delete Btn
// function deleteButton(){
//   deleteBtn = [...document.querySelectorAll('#deleteBtn')];
//   deleteBtn.forEach((item) => {
//       item.addEventListener('click', deleteProduct)
//   })
// }
// function deleteProduct(event) {
//   event.preventDefault()
//   let startingItem = deleteBtn.indexOf(event.target);
//   productArray.splice(startingItem, 1);
//   localStorage.setItem('products', JSON.stringify(productArray))
//   render()
// }
// figure out tonight 

// let idOption = document.querySelector('#id-desc')
// let priceOption = document.querySelector('#price-desc')

// idOption.addEventListener('change', ()=>{
//     let option = idOption.value 

//     if(option === 'id'){
//         data.sort((a,b) => a.id - b.id) // Ascending sort for ID
//         showProducts()
//     } else if(option === 'id-desc'){
//         data.sort((a,b) => b.id - a.id) // Descending sort for ID
//         showProducts()
//     }
// })

priceOption.addEventListener('change', ()=>{
    let option = priceOption.value 

    if(option === 'price'){
        data.sort((a,b) => a.price - b.price) // Ascending sort for ID
        showProducts()
    } else if(option === 'price-desc'){
        data.sort((a,b) => b.price - a.price) // Descending sort for ID
        showProducts()
        console.log(data);
    }
})


function editItems() {
  console.log("HELLO I WORK!");
  const saveButtons = [...document.querySelectorAll("#saveBtn")];
  saveButtons.forEach((save, i) => {
    save.addEventListener("click", (e) => {
      e.preventDefault()
      // let index = saveButton.indexOf(e.target)
      let changeId = [...document.querySelectorAll('#idAdmin')]
      let changeName = [...document.querySelectorAll("#name")];
      let changeImage = [...document.querySelectorAll("#imageUrl")];
      let changeDesc = [...document.querySelectorAll("#adminDesc")];
      let changePrice = [...document.querySelectorAll("#priceAdmin")];
      let itemId = [...document.querySelectorAll('.id')]
      let itemNames = [...document.querySelectorAll(".title")];
      let itemPrices = [...document.querySelectorAll(".prices")];
      let itemImages = [...document.querySelectorAll(".pics")];
      console.log(changeDesc[i]);
      let newId = (itemId[i].innerText = changeId[i].value)
      let newName = (itemNames[i].innerText = changeName[i].value);
      let newPrice = (itemPrices[i].innerText = changePrice[i].value);
      let newImage = itemImages[i].setAttribute("src", changeImage.value);
      console.log(data[i]);
      let newerContent = {
        id:newId,
        name: newName,
        image: newImage,
        desc: changeDesc[i].value,
        price: newPrice,
      };
      data[i] = newerContent;
      let p = document.querySelector("#admin");
      console.log(data);
      localStorage.setItem("productData",JSON.stringify(data))
      p.innerHTML = "";
      let modal = document.querySelector(".modal-backdrop");
      modal.style.display = "none";
      showProducts();
  });
})
}

function addItems() {
  console.log("I WORK");
  let id = document.querySelector("#idAdmin");
  let name = document.querySelector("#name");
  let image = document.querySelector("#imageUrl");
  let price = document.querySelector("#priceAdmin");
  let newPartOfArray = {
    id: id.value,
    name: name.value,
    image: image.value,
    price: price.value,
  };
  data.push(newPartOfArray);
  let g = document.querySelector("#admin");
  g.innerHTML = "";
  showProducts();
}
