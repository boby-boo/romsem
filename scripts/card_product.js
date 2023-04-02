findId() 
const categoryArray = [];

function findId() {
    const cardId = localStorage.getItem('idCard');
    fetch('./db.json')
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < data.length; i++) {
                if (data[i].id == cardId) {
                    createCardProduct(data[i])
                    for(let j= 0; j < data.length; j++) {
                        if (data[j].category == data[i].category) {
                            categoryArray.push(data[j]) 
                        }
                    }
                }
            }
        })
}

function createCardProduct(card) {
    document.querySelector('#product-info__row').innerHTML = ''
    document.querySelector('#product-info__row').innerHTML =
    `<div class="product-info__card">
<div class="product-info__image">
    <img src="${card.image}" alt="product-info image">
</div>
<div class="product-info__description">
    <h1>${card.title}</h1>
    <span>${card.weight}</span>
    <div class="product-info__order">
        <span>${card.price}</span>
        <div class="product-order__order">
            <button class="product-order__minus primary-btn__minus"></button>
            <span>1</span>
            <button class="product-order__plus primary-btn__plus"></button>
        </div>
    </div>
    <div class="product-info__info">
        <h3>Состав</h3>
        <p>Lorem ipsum lorem ipsum</p>
    </div>
</div>
    </div>`
}

let counter = 0;
document.querySelector('.product-info__btns').addEventListener('click', (e) => {
    if (e.target.tagName != "BUTTON") return;

    if (e.target.closest('.product-info__btn-previous')) {
        if (counter <= 0) {
            counter = categoryArray.length - 1;
        }
        createCardProduct(categoryArray[counter]);
        --counter;
    }

    if (e.target.closest('.product-info__btn-next')) {
        console.log(counter)
        if (counter > categoryArray.length - 1) {
            counter = 0;
        }
        createCardProduct(categoryArray[counter]);
        ++counter;
    }
})