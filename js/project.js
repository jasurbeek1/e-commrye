const prodactRow = document.querySelector(`.prodacts-row`)
const searchInput = document.querySelector(`.search__input`)
const productsNumber = document.querySelector(`.products__number`)

// ? pagination changer start
const pagination = document.querySelector(`.pagination`)
let limit = 10
let pages = Math.ceil(products.length / limit)
let pgtnList = "";
let active = 1
// ? pagination changer end

//! cards start


//todo card mepping start
function getPordactCard({images, name, description: desc, price}) {
  return `
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card mt-5">
          <img src=${images[0]} height="200" class="card-img-top w-100" alt="${name}">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
                <p  class="card-text" style="
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp:2;
                   overflow: hidden;
                    ">${desc}
                </p>
                <p  class="card-text">${price}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
       </div>
   </div>

          `
}
//todo card mepping end 
        
// todo card marker start
function getPordacts(data = products){
  let  start = active * limit 
  prodactRow.innerHTML = ``
  data.slice(start, start + limit).forEach((e) => {
    prodactRow.innerHTML += getPordactCard(e)
  })
  productsNumber.textContent = data.length
}
// todo card marker start

//todo card render start
getPordacts()
//todo card render end


// todo search start 
searchInput.addEventListener(`keyup`, function  () {
  let searchValue = this.value.trim().toLowerCase();
  let searchProdacts = products.filter((el) => el.name.toLowerCase().includes(searchValue));
  getPordacts(searchProdacts);
})
// todo search end 


//! cards end

//todo button pagination start



pgtnList += `<li class="page-item disabled">
<span class="page-link">Previous</span>
</li>`

  for(let i =1; i <= pages; i++) {
  pgtnList += ` <li onclick="getPage(${i}) ${i == active ?  `active` : ''}" class="page-item"><span class="page-link">${i}</span></li> `
}

pgtnList += `<li class="page-item">
<span class="page-link">Next</span>
</li>`



pagination.innerHTML += pgtnList;


function getPage(page) {
  active = page - 1
  getPordacts()
}
//todo button pagination end 
