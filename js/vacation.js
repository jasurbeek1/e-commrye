// todo                     Determine
// ? data-baza
const data = products
const data2 = categories;
//? dropdownlist determines
const imgBtnNav = document.querySelector(`#imgBtnNav`)
const dropdownList = document.querySelector(`.dropdown`)
// ? search product determines
const inputSearch = document.querySelector(`.inputSearch`)
const dropdownInput = document.querySelector(`.dropdown-input`)
// ? kotalog product determines
const kotalogProduct = document.querySelector(`.grid`);
kotalogHtml = ``;

////////// ! start of dropdownlist
dropdownList.style = `display:none;`
imgBtnNav.addEventListener('click', () => {
    if(dropdownList.style.display == 'none'){
        dropdownList.style.display = 'flex'
    }else{
    dropdownList.style = `display:none;`
    }
})
////////////! end of dropdownList


//////////////////// ! end of input search start
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
//////////////////// ! end of input search end

// ! start of kotalog page
data2.map(prod => {
    kotalogHtml += `
    <div class="grid-item">
        <img src="${prod.image}" alt="${prod.name}">
        <a href="#">${prod.name}</a>
    </div> 
    `
    console.log(kotalogHtml);
})
kotalogProduct.innerHTML = kotalogHtml
// ! end of kotalog page 