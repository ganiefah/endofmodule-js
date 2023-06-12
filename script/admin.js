



let data= 
    JSON.parse(localStorage.getItem("products")) ?
    JSON.parse(localStorage.getItem("products")) :
    localStorage.setItem('products', 
    JSON.stringify(
        [
        {
            id:1,
            title:'Paricha',
            image: 'https://i.postimg.cc/9Qp0J7yQ/19248-Parchira-1.jpg',
            price: 'R 650,00' ,
            modal: 'A “money tree” is actually multiple Pachira aquatica trees braided together during growth. Pachira aquatica is a broadleaf evergreen native to Central and South America and has many common names including Good Luck Tree, Malabar chestnut, Guiana Chestnut, French Peanut, Saba Nut, Monguba, Pumpo, Provision Tree, and Wild Kapok Tree.',
        },
        {
            id:2,
            title:'Dracaena',
            image: 'https://i.postimg.cc/fTkBSCzj/17634-Dracaena.jpg',
            price: 'R 770,00' ,
            modal: ' Dracaena is one of the indoor plants that help reduce indoor pollution levels. Increase humidity: The plant releases water vapour and increases moisture levels in air, thus, reducing dry-air conditions. Ornamental purpose: These indoor plants help beautify home interiors.',
        },
        {
            id:3,
            title:'Caladium',
            image: 'https://i.postimg.cc/hjZgMsHb/18147-Caladium.jpg',
            price: 'R 390,00' ,
            modal: ' Caladiums are tropical plants known for their big, heart-shaped leaves that display amazing color combinations of white, pink, red and green. Though caladiums rarely flower, their foliage guarantees a colorful show wherever they are planted -- beneath trees, between shrubs, in perennial borders or in containers.',
        },
        {
            id:4,
            title:'Monstera',
            image: 'https://i.postimg.cc/mgh8vwz6/17753-Monstera.jpg',
            price: 'R 180,00' ,
            modal: 'Monstera deliciosa is a favourite plant among decorators thanks to its dramatic and unusual leaves, and it is also an ideal plant to attract money and good fortune according to Feng Shui.',
        },{
            id:5,
            title:'Oak Bonsai Tree',
            image: 'https://i.postimg.cc/0Qnrv7hb/20992-Oak-Bonsai-Tree.jpg',
            price: 'R 490,00' ,
            modal: "Oak bonsai trees have a tremendous and stately appearance—deep, dark green lobes with show-stopping form. Potential hollows in the trunk and moderately coarse branching systems are the features that make the white oak like no other."
          },
          {
            id:6,
            title:'Fern Tree',
            image: 'https://i.postimg.cc/j2RBBNQM/14881-Fern-Tree.jpg',
            price: 'R 500,00' ,
            modal: ' Apart from enhancing the aesthetics, they are also useful in removing harmful air pollutants from the environment. The  Ferns not only spruce up the air quality but also improve the humidity levels by restoring moisture to the air naturally, which gives a soothing effect.',
          },
          {
            id:7,
            title:'Olive Tree',
            image: 'https://i.postimg.cc/63N95MNc/19849-Olive-Tree.jpg',
            price: 'R 350,00' ,
            modal: 'Olive leaf extract comes from the leaves of an olive plant. It contains an active ingredient called oleuropeinTrusted Source. This nutrient is thought to contribute to the anti-inflammatory and antioxidant properties of olive leaf extract.',
          },
          {
            id:8,
            title:'Bay Tree',
            image: 'https://i.postimg.cc/446rgJdr/19857-Bay-Tree.jpg',
            price: 'R 950,00' ,
            modal: ' The bay tree is used as a valuable flavoring agent in the culinary and food industry. This plant is used in folk medicine, in stomachic and carminative remedies, and for the treatment of digestive disease.',
          },{
            id:9,
            title:'Snowball Tree',
            image: 'https://i.postimg.cc/bNMW4yjc/19819-Snowball-Tree-B.jpg',
            price: 'R 1050,00' ,
            modal: "Huge heads of white, hydrangea-like flowers are the main feature of this spectacular, spring-flowering shrub that enjoys a cool position. Since the flowers are the main attraction, its foliage is not as important as with other viburnums, but it does gain colour in autumn.  ."
          },
          {
            id:10,
            title:'Zebrina Plant',
            image: 'https://i.postimg.cc/QtW7K8VD/Screenshot-2023-06-12-141357.png',
            price: 'R 425,00' ,
            modal: ' Apart from enhancing the aesthetics, they are also useful in removing harmful air pollutants from the environment. The  Ferns not only spruce up the air quality but also improve the humidity levels by restoring moisture to the air naturally, which gives a soothing effect.',
          },
          {
            id:11,
            title:'String Of Pearls Plant',
            image: 'https://i.postimg.cc/yNZ5xB14/Screenshot-2023-06-12-141105.png',
            price: 'R 400,00' ,
            modal: 'Our string of pearls is an eye-catching trailing succulent that simply takes the outdoors in, providing a touch of greenery to any room and is ideal for placing on shelves and sideboards. It comes in a sturdy and stylish cement pot that accentuates and complements a range of home décor styles for maximum versatility.',
          },
          {
            id:12,
            title:'Onion Grass ',
            image: 'https://i.postimg.cc/4xsNzJ2G/Screenshot-2023-06-12-142111.png',
            price: 'R 430,00' ,
            modal: 'Take this magnificent onion grass with a touch of the wild to bring in the outdoors; it is the ideal decorative element to liven up your living space instantly. It comes in a sturdy and stylish cement pot that accentuates and complements a range of home décor styles for maximum versatility.',
          }
        ]

    ))

    console.log(data);

    Object.keys(data).forEach((products) =>{    
    let stuff = data[products];
    let p = document.querySelector('#admin');
    console.log(data[products]);
    p.innerHTML +=`
    <div class="table-responsive">
    <tbody id="admin">
      <tr>
        <th scope="row">#1</th>
        <td>${stuff.title}</td>
        <td>${stuff.image}</td>
        <td>${stuff.price}</td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
      </tr>
    </tbody>
    </div>
    `
  });
