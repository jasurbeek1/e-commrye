// ?data-baza
const data = products
// todo determine 
// ? dropdown determines
const imgBtnNav = document.querySelector(`#imgBtnNav`)
const dropdownList = document.querySelector(`.dropdown`)
// ? action product determines
const actionCard = document.querySelector(`.card`)
let aksiyaHtml = '';
// ? news product determines
const newsProduct = document.querySelector(`#card`)
let newsHtml = '';
// ? xit product determines
const xitProduct = document.querySelector(`#xit .card`);
let xitHtml = '';

// ? search product determines

const inputSearch = document.querySelector(`.inputSearch`)
const dropdownInput = document.querySelector(`.dropdown-input`)


inputSearch.addEventListener("input", () => {
    let searchRes = '';
    const filteredData = data.filter(product => product.name.toLowerCase().includes(inputSearch.value.toLowerCase()));
    filteredData.map(prod => {
        searchRes += `
        <div class="dropdown-input-card">
            <img src="${prod.images[0]}" alt="">
            <h3>${prod.price}</h3>
            <p>${prod.name}</p>
        </div>
        `
    })
    if(inputSearch.value === ''){
        searchRes = ''
    }
    dropdownInput.innerHTML = searchRes;
})




// ! dropdown start
dropdownList.style = `display:none;`

imgBtnNav.addEventListener('click', () => {
    if(dropdownList.style.display == 'none'){
        dropdownList.style.display = 'flex'
    }else{
    dropdownList.style = `display:none;`
    }
})
// ! dropdown end




// ! action product start
function getActionProduct() {
    products.filter(prod => prod.discount > 0).slice(0, 4).map(product => {
        aksiyaHtml += `
        <div class="cart">
                <div class="cartPanel">
                    <img class="likeCart" src="./img/like.svg" alt="like">
                    <img class="imgCart" src=${product.images[0]} alt="${name}">
                    <span class="actionSpan">-${product.discount}</span>
                </div>
                <div class="nameCart">
                <h3 style="padding:0;">${product.name}</h3>
                </div>
                <div class="praecSpan" style="display: flex;justify-content: space-between;padding: 0;">
              
                    <span class="praec" style="padding: 0;">
                        <strong>${product.price - product.discount}₽</strong>
                        <p>С картой</p>
                    </span>
                    <span class="praec">
                        <strong style="color: #606060;">${product.price} ₽</strong>
                        <p>Обычная</p>
                    </span>
                </div>
                <div class="cartBtn">
                    <h3>${product.description}</h3>
                    ${
                        Array(Math.round(product.rating)).fill(0).map(star => {
                            return `
                                <img class="raitingImg" src="./img/star-orange.png" alt="">
                            `
                        }).join("")
                    }
                    ${
                        Array(5 - Math.round(product.rating)).fill(0).map(star => {
                            return `
                                <img class="raitingImg" src="./img/star-gray.png" alt="">
                            `
                        }).join("")
                    }
                    <p style="display: inline; justify-content: start; align-items: center;">${Math.round(product.rating)}.0</p>
                    <button> В корзину</button>
                </div>
        </div>
    `
    })
    actionCard.innerHTML = aksiyaHtml;
}
getActionProduct()
// ! action product end


// ! news product start
function getNewsPrducts() {
    products.slice(-4).map(product => {
        newsHtml += `
        <div class="cart">
        <div class="cartPanel">
            <img class="likeCart" src="./img/like.svg" alt="like">
            <img class="imgCart" src=${product.images[0]} alt="${product.name}" style="width: 350px;">
        </div>
        <div class="praecSpan" style="display: flex;justify-content: space-between;padding: 0;">
           
            <span class="praec">
                <strong style="color: #606060;">${product.price} ₽</strong>
                <p>Обычная</p>
            </span>
        </div>
        <div class="cartBtn">
            <h3>${product.description}</h3>

            ${
                Array(Math.round(product.rating)).fill(0).map(star => {
                    return `
                        <img class="raitingImg" src="./img/star-orange.png" alt="">
                    `
                }).join("")
            }
            ${
                Array(5 - Math.round(product.rating)).fill(0).map(star => {
                    return `
                        <img class="raitingImg" src="./img/star-gray.png" alt="">
                    `
                }).join("")
            }
            <p style="display: inline; justify-content: start; align-items: center;">${Math.round(product.rating)}.0</p>

            <button>В корзину</button>
        </div>
    </div>
        
    `
    })
    newsProduct.innerHTML = newsHtml
}
getNewsPrducts();
// ! news product end


function getXitProduct () {
        products.sort((a, b)=> a.rating - b.rating ).slice(-4).map(product => {
            xitHtml += `
            <div class="cart">
            <div class="cartPanel">
                <img class="likeCart" src="./img/like.svg" alt="like">
                <img class="imgCart" src=${product.images[0]} alt="${product.name}" style="width: 350px;">
            </div>
            <div class="praecSpan" style="display: flex;justify-content: space-between;padding: 0;">
               
                <span class="praec">
                    <strong style="color: #606060;">${product.price} ₽</strong>
                    <p>Обычная</p>
                </span>
            </div>
            <div class="cartBtn">
                <h3>${product.description}</h3>
    
                ${
                    Array(Math.round(product.rating)).fill(0).map(star => {
                        return `
                            <img class="raitingImg" src="./img/star-orange.png" alt="">
                        `
                    }).join("")
                }
                ${
                    Array(5 - Math.round(product.rating)).fill(0).map(star => {
                        return `
                            <img class="raitingImg" src="./img/star-gray.png" alt="">
                        `
                    }).join("")
                }
                <p style="display: inline; justify-content: start; align-items: center;">${Math.round(product.rating)}.0</p>
    
                <button>В корзину</button>
            </div>
        </div>
            
        `
        })
        xitProduct.innerHTML = xitHtml
    
}

getXitProduct();