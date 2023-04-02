class CatalogItems {
    products = [];
    constructor(selectorContainer, previousBtn, nextBtn) {
        this.selectorContainer = document.querySelector(selectorContainer);
        this.previousBtn = document.querySelector(previousBtn);
        this.nextBtn = document.querySelector(nextBtn);
        this.findId();
        this.slider();
    }

    findId() {
        const cardId = localStorage.getItem('idCard');
        fetch('./db.json')
            .then(res => res.json())
            .then(data => {
                for(let i = 0; i < data.length; i++) {
                    if (data[i].id == cardId) {
                        this.createCardProduct(data[i])
                        for(let j= 0; j < data.length; j++) {
                            if (data[j].category == data[i].category) {
                                this.products.push(data[j]) 
                            }
                        }
                    }
                }
            })
    }

    createCardProduct(card) {
        this.selectorContainer.innerHTML = ''
        this.selectorContainer.innerHTML =
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

    slider() {
        let counter = 0;
        this.previousBtn.onclick = () => {
            if (counter <= 0) {
                counter = this.products.length - 1;
            }
            this.createCardProduct(this.products[counter]);
            --counter;
        }
        this.nextBtn.onclick = () => {
            if (counter > this.products.length - 1) {
                counter = 0;
            }
            this.createCardProduct(this.products[counter]);
            ++counter;
        } 
    }
}
const catalogItems = new CatalogItems('#product-info__row', '#product-info__btn-previous', '#product-info__btn-next');

document.querySelector('#aside__row').addEventListener('click', (e) => {
    if (e.target.tagName != 'A') return;
    localStorage.setItem('activeCategory', e.target.dataset.category)
})