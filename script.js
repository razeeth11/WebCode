
async function makeUp() {

  var url = 'https://makeup-api.herokuapp.com/api/v1/products.json'

  try{
    var fetchData = await fetch(url)
  var fetched = await fetchData.json()

  
  for(i=0;i<fetched.length;i++){

    // ----------div created by DOM -------------------

    var div = document.createElement('div') 
    var body = document.querySelector('body')
    body.append(div)


     // ----------brand name created by DOM -------------------
    
    var brand = document.createElement('h2') 
    brand.innerText = fetched[i].brand
    console.log(fetched[i].brand)
    div.append(brand)

     // ----------image tag created by DOM -------------------

    var image = document.createElement('img')
    image.setAttribute('src', fetched[i].image_link)
    image.setAttribute('alt', fetched[i].name)
    console.log(fetched[i].image_link)
    div.append(image)

     // ----------product name created by DOM -------------------

    var name = document.createElement('h3')
    name.innerText = fetched[i].name
    console.log(fetched[i].name)
    div.append(name)

     // ----------product price tag created by DOM -------------------

    var price = document.createElement('h3')
    price.classList.add('head3')
    price.innerText = fetched[i].price
    console.log(fetched[i].price)
    div.append('$ ', price)

     // ----------hr tag created by DOM -------------------

    var line = document.createElement('hr')
    div.append(line)

     // ----------description tag created by DOM -------------------

    var description = document.createElement('p')
    description.innerText = fetched[i].description
    console.log(fetched[i].description)
    div.append(description)

     // ---------- product link created as a purchase button using DOM -------------------

    var link = document.createElement('a')
    link.setAttribute('href',fetched[i].product_link) 
    link.innerText = "Purchase"
    console.log(fetched[i].product_link)
    div.append(link)



  }
  console.log("Successfully fetched")
} 
catch(error){
  console.log(error)
  console.log("Something error!")
}
}

makeUp()