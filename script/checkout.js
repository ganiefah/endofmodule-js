let checkoutPlants = JSON.parse(localStorage.getItem('checkoutStorage'))
let newplant= document.querySelector('#cartItems')
function checkoutDisplay() {
    checkoutPlants.forEach((item) => {
        newPlant.innerHTML += `
        <tbody id="admin">
        <tr>
          <td id="newTitle">${item.title}</td>
          <td id="newImage"><img src="${item.image}" alt="logo" loading="lazy"></td>
          <td id="newDesc">${item.description}</td>
          <td id="newPrice">${item.price}</td>
        </tr>
        </tbody>
        `
    })
}
checkoutDisplay()