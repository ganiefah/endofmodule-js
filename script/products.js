let that = document.querySelector("#product")
let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem(
      "products",
      JSON.stringify([
        {
          id: 1,
          cat: "Indoor Items",
          title: "Paricha",
          image: "https://i.postimg.cc/9Qp0J7yQ/19248-Parchira-1.jpg",
          price: "R 650,00",
          modal:
            "A “money tree” is actually multiple Pachira aquatica trees braided together during growth. Pachira aquatica is a broadleaf evergreen native to Central and South America and has many common names including Good Luck Tree, Malabar chestnut, Guiana Chestnut, French Peanut, Saba Nut, Monguba, Pumpo, Provision Tree, and Wild Kapok Tree.",
        },
        {
          id: 2,
          cat: "Indoor Items",
          title: "Dracaena",
          image: "https://i.postimg.cc/fTkBSCzj/17634-Dracaena.jpg",
          price: "R 770,00",
          modal:
            " Dracaena is one of the indoor plants that help reduce indoor pollution levels. Increase humidity: The plant releases water vapour and increases moisture levels in air, thus, reducing dry-air conditions. Ornamental purpose: These indoor plants help beautify home interiors.",
        },
        {
          id: 3,
          cat: "Indoor Items",
          title: "Caladium",
          image: "https://i.postimg.cc/hjZgMsHb/18147-Caladium.jpg",
          price: "R 390,00",
          modal:
            " Caladiums are tropical plants known for their big, heart-shaped leaves that display amazing color combinations of white, pink, red and green. Though caladiums rarely flower, their foliage guarantees a colorful show wherever they are planted -- beneath trees, between shrubs, in perennial borders or in containers.",
        },
        {
          id: 4,
          cat: "Indoor Items",
          title: "Monstera",
          image: "https://i.postimg.cc/mgh8vwz6/17753-Monstera.jpg",
          price: "R 180,00",
          modal:
            "Monstera deliciosa is a favourite plant among decorators thanks to its dramatic and unusual leaves, and it is also an ideal plant to attract money and good fortune according to Feng Shui.",
        },
        {
          id: 5,
          cat: "Outdoor Items",
          title: "Bonsai",
          image: "https://i.postimg.cc/0Qnrv7hb/20992-Oak-Bonsai-Tree.jpg",
          price: "R 490,00",
          modal:
            "Bonsai trees have a tremendous and stately appearance—deep, dark green lobes with show-stopping form. Potential hollows in the trunk and moderately coarse branching systems are the features that make the white oak like no other.",
        },
        {
          id: 6,
          cat: "Outdoor Items",
          title: "Fern Tree",
          image: "https://i.postimg.cc/j2RBBNQM/14881-Fern-Tree.jpg",
          price: "R 500,00",
          modal:
            " Apart from enhancing the aesthetics, they are also useful in removing harmful air pollutants from the environment. The  Ferns not only spruce up the air quality but also improve the humidity levels by restoring moisture to the air naturally, which gives a soothing effect.",
        },
        {
          id: 7,
          cat: "Outdoor Items",
          title: "Olive Tree",
          image: "https://i.postimg.cc/63N95MNc/19849-Olive-Tree.jpg",
          price: "R 350,00",
          modal:
            "Olive leaf extract comes from the leaves of an olive plant. It contains an active ingredient called oleuropeinTrusted Source. This nutrient is thought to contribute to the anti-inflammatory and antioxidant properties of olive leaf extract.",
        },
        {
          id: 8,
          cat: "Outdoor Items",
          title: "Bay Tree",
          image: "https://i.postimg.cc/446rgJdr/19857-Bay-Tree.jpg",
          price: "R 950,00",
          modal:
            " The bay tree is used as a valuable flavoring agent in the culinary and food industry. This plant is used in folk medicine, in stomachic and carminative remedies, and for the treatment of digestive disease.",
        },
        {
          id: 9,
          cat: "Best Seller",
          title: "Snowball Tree",
          image: "https://i.postimg.cc/bNMW4yjc/19819-Snowball-Tree-B.jpg",
          price: "R 1050,00",
          modal:
            "Huge heads of white, hydrangea-like flowers are the main feature of this spectacular, spring-flowering shrub that enjoys a cool position. Since the flowers are the main attraction, its foliage is not as important as with other viburnums, but it does gain colour in autumn.  .",
        },
        {
          id: 10,
          cat: "Best Seller",
          title: "Zebrina Plant",
          image:
            "https://i.postimg.cc/QtW7K8VD/Screenshot-2023-06-12-141357.png",
          price: "R 425,00",
          modal:
            " Apart from enhancing the aesthetics, they are also useful in removing harmful air pollutants from the environment. The  Ferns not only spruce up the air quality but also improve the humidity levels by restoring moisture to the air naturally, which gives a soothing effect.",
        },
        {
          id: 11,
          cat: "Best Seller",
          title: "String Of Pearls ",
          image:
            "https://i.postimg.cc/yNZ5xB14/Screenshot-2023-06-12-141105.png",
          price: "R 400,00",
          modal:
            "Our string of pearls is an eye-catching trailing succulent that simply takes the outdoors in, providing a touch of greenery to any room and is ideal for placing on shelves and sideboards. It comes in a sturdy and stylish cement pot that accentuates and complements a range of home décor styles for maximum versatility.",
        },
        {
          id: 12,
          cat: "Best Seller",
          title: "Onion Grass ",
          image:
            "https://i.postimg.cc/4xsNzJ2G/Screenshot-2023-06-12-142111.png",
          price: "R 430,00",
          modal:
            "Take this magnificent onion grass with a touch of the wild to bring in the outdoors; it is the ideal decorative element to liven up your living space instantly. It comes in a sturdy and stylish cement pot that accentuates and complements a range of home décor styles for maximum versatility.",
        },
        {
          id: 13,
          cat: "Sale Items",
          title: "Biogrow Biotrissol ",
          image:
            "https://i.postimg.cc/Ls6Ttfkn/biogrow-biotrissol-organic-liquid-fertilizer-sku3824.jpg",
          price: "R 50,00",
          modal:
            "This organic liquid fertilizer is a natural fermentation product gained from processing sugar beet. It contains a combination of essential nutrients in an organically assimilated form. The vitamins, ferments and growth-promoting substances contained in Biotrissol strengthen the plants and promote the formation of blooms. Biotrissol also provides nutrients for the micro-organisms in the soil and thus help to reactivate the soil.",
        },
        {
          id: 14,
          cat: "Sale Items",
          title: "Biogrow Pyrol (Insecticide)",
          image:
            "https://i.postimg.cc/CxWvgdb1/biogrow-pyrol-insecticide-250ml-sku3827v1-1.png",
          price: "R 60,00",
          modal:
            "This product provides broad-spectrum control. It can be used as a dormant and growing season insect spray and kills all stages of insects, including eggs, on contact. It is a proprietary formulation consisting only of naturally occurring plant oils as active ingredients. It is truly an insecticide from plants for plants. It does not contain piperonyl butoxide as a synergist, and the active ingredients do not persist in the environment.",
        },
        {
          id: 15,
          cat: "Sale Items",
          title: "Biogrow Copper (Fungicide)",
          image:
            "https://i.postimg.cc/GmJBc5yy/biogrow-copper-soap-fungicide-sku3825.jpg",
          price: "R 100,00",
          modal:
            "This product will control fungal diseases such as: Powdery mildew and downy mildew on vegetables and ornamentals; rust on ornamentals.",
        },
        {
          id: 16,
          cat: "Sale Items",
          title: "Natural Herbicidal Soap",
          image:
            "https://i.postimg.cc/L5kdqwFc/biogrow-finalsan-natural-herbicidal-soap-sku3830.jpg",
          price: "R 75,00",
          modal:
            "Finalsan is a natural herbicide for the control of annual weeds, moss and algae. The active ingredients are naturally occurring fatty acids extracted from plants. They are soft on the environment and safe to use. Finalsan will control moss and algae on structural surfaces and does not stain concrete, brick or wood surfaces.",
        },
      ])
    );

// Sort button
let asc = true;
function sortProduct(){
if(asc === true){
  asc = false;
  data= products.sort((a, b) => {
    if (a.title < b.title) {
        return -1;
    } else if (a.title > b.title) {
        return 1;
    } else {
      return 0;
    }
});
} else {
  asc = true
data= products.sort((a, b) => {
      if (a.title < b.title) {
          return 1;
      } else if (a.title > b.title) {
          return -1;
      } else {
        return 0;
      }
  });
}
that.innerHTML = '';
displayData();
}

//add to cart
let addToCart = document.querySelector('#addToCart')
let checkoutStorage = [];
function addCheckoutItem(index) {
  checkoutStorage.push(products[index])
  localStorage.setItem('checkoutStorage', JSON.stringify(checkoutStorage))
  alert('It was ADDED!')
}

let wrapper = document.querySelector("#product");
let dropDown = document.querySelector("#category");

let categories = new Set(
  products.map((p) => {
    return p.cat;
  })
);
// Display all categories
dropDown.innerHTML = "";
try {
  categories.forEach((cat) => {
    dropDown.innerHTML += `
      <option value='${cat}'>${cat}</option>
    `;
  });
} catch (e) {
  console.error(e.message);
  location.reload();
}
dropDown.addEventListener("change", () => {
  displayData(dropDown.value);
});
function displayData(category = "all") {
  wrapper.innerHTML = "";
  let filterData;
  switch (category) {
    case "all":
      filterData = [...products];
      break;
    default:
      filterData = products.filter((p) => {
        return p.cat?.toLowerCase() == category?.toLowerCase();
      });
      break;
  }
  filterData.forEach((product) => {
    wrapper.innerHTML += `
      <div class="col">
      <div class="card">
      <img src="${product.image}" class="card-img-top" alt="${product.title}">
      <div class="card-body">
        <h5 class="card-title">${product.title} - ${product.cat}</h5>
        <p class="card-text">${product.price}</p> 
        <button type="button"  class="btn btn-outline-success " data-bs-toggle="modal" data-bs-target="#${product.id}">
        Read More
        </button>
        <div class="modal fade" id="${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">"${product.title}"</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>${product.modal}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>  
    <button class="btn">Add To Cart</button>
    </div>
    </div> 
      </div>
    </div>
    </div>
      `;
  });
}


displayData();
