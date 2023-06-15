
let result = document.querySelector("#admin")
let data = JSON.parse(localStorage.getItem("products"))
  // ? JSON.parse(localStorage.getItem("products"))

showProducts();

function showProducts() {
  Object.keys(data).forEach((products) => {
    let stuff = data[products];
    let p = document.querySelector("#admin");
    // console.log(data[products]);
    p.innerHTML += `
        <div class="table">
        <tbody id="admin">
        <tr>
        <th scope="col" class="id">${stuff.id}</th>
        <td scope="col" class="title">${stuff.title}</td>
        <td scope="col" class="pics"> <img src="${stuff.image}"  alt="" loading="lazy" class="adminPics" ></td>
        <td scope="col" class="description">${stuff.modal}</td>
        <td scope="col" class="prices">${stuff.price}</td>
        <td scope="col"><button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#editModal${stuff.id}">
        Edit
      </button>
      <!-- Modal -->
      <div class="modal fade" id="editModal${stuff.id}" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
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
              <input type="ID" class="form-control" id="idAdmin${stuff.id}" aria-describedby="emailHelp" value="${stuff.id}">
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Product name:</label>
              <input type="Product" class="form-control" id="name${stuff.id}" aria-describedby="emailHelp" value="${stuff.title}">
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Image URL:</label>
              <input type="text" class="form-control" id="imageUrl${stuff.id}" aria-describedby="emailHelp" value="${stuff.image}">
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Price:</label>
              <input type="text" class="form-control" id="priceAdmin${stuff.id}" aria-describedby="emailHelp" value="${stuff.price}">
            </div>
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Description:</label>
            <textarea class="form-control" id="description${stuff.id}">${stuff.modal}</textarea>
          </div>
          </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" id="saveBtn" onclick='new EditItems(${JSON.stringify(stuff)})'>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </td>
    <td><button id="delButton" onclick="deleteButtons()">Delete</button></td>
        </tr>
        </tbody>
        </div>
        `;
  });
  deleteButtons();
}    

// edit button
function EditItems(item){
  // location.reload();
  let beginning = data.findIndex( p=>{
      return p.id == item.id 
  });

  this.id = document.querySelector(`#idAdmin${item.id}`).value
  this.title = document.querySelector(`#name${item.id}`).value
  this.image = document.querySelector(`#imageUrl${item.id}`).value
  this.price = document.querySelector(`#priceAdmin${item.id}`).value 
  this.modal = document.querySelector(`#description${item.id}`).value
  data[beginning] = Object.assign({}, this)
  localStorage.setItem('products', JSON.stringify(data))
  location.reload()
 showProducts()
  
} 

function addItems() {
  let p = document.querySelector("#admin");

  let id = document.querySelector("#id");
  let title = document.querySelector("#titleName");
  let modal = document.querySelector("#descriptionAdd");
  let image = document.querySelector("#picture");
  let price = document.querySelector("#price");
  let newPartOfArray = {
 
    id: id.value,
    name: title.value,
    modal: modal.value,
    image: image.value,
    price: price.value,
  };
  data.push(newPartOfArray);
  console.log(data)
  p.innerHTML = ''
  // let g = document.querySelector("#admin");
  // g.innerHTML = "";
  localStorage.setItem("products", JSON.stringify(data))
  showProducts();
}


function deleteButtons(){
  dButton = [...document.querySelectorAll('#delButton')];
  dButton.forEach((item)=>{
      item.addEventListener('click', deleteProduct)
      localStorage.setItem("products", JSON.stringify(data));
})
}
function deleteProduct(event){
  result.innerHTML= ""
  let begin = dButton.indexOf(event.target);
  data.splice(begin, 1);
  localStorage.setItem("products", JSON.stringify(data));
  showProducts()
}


// Sort button
let asc = true;
function sortProduct(){
  console.log(parseInt(data[0].price.split(' ')[1]))
if(asc === true){
  asc = false;
  data= data.sort((a, b) => {
    if (parseInt(a.price.split(' ')[1]) < parseInt(b.price.split(' ')[1])) {
        return -1;
    } else if (parseInt(a.price.split(' ')[1]) > parseInt(b.price.split(' ')[1])) {
        return 1;
    } else {
      return 0;
    }
});
} else {
  asc = true
data= data.sort((a, b) => {
      if (parseInt(a.price.split(' ')[1]) < parseInt(b.price.split(' ')[1])) { 
          return 1;
      } else if (parseInt(a.price.split(' ')[1]) > parseInt(b.price.split(' ')[1])) {
          return -1;
      } else {
        return 0;
      }
  });
}
result.innerHTML = '';
showProducts();
}