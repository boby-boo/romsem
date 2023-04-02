
// Прослушка на есайд і запис активного лінку для хеш

document.querySelector('#aside').addEventListener('click', (e) => {
    if (e.target.tagName != 'A') return;
    localStorage.setItem('activeCategory', e.target.dataset.category);
})

// сховати/показти додатковий текст
const aboutRowButton = document.querySelector('#about__row-button');
aboutRowButton.addEventListener('click', () => {
    let container = document.querySelector('#about__description');
    let buttonImage = aboutRowButton.firstElementChild;
    
    container.classList.toggle('about__description-active');
    if (container.closest('.about__description-active')) {
        buttonImage.src = './src/about/about__arrow-up.svg';
    } else {
        buttonImage.src = './src/about/about__arrow.svg';
    }
})

class CatalogFilter {
    constructor(button, listCategory, select) {
        this.button = document.querySelector(button);
        this.listCategory = document.querySelector(listCategory);
        this.selectTag = document.querySelector(select);
        this.changeVisibleList();
        this.changeCategoryItem();
    }

    changeVisibleList() {
        this.button.addEventListener('click', () => this.listCategory.classList.toggle('active'))
    }

    changeCategoryItem() {
        for (let i = 0; i < this.selectTag.options.length; i++) {
            const li = document.createElement('li');
            li.innerHTML = this.selectTag.options[i].innerHTML;
            li.addEventListener('click', () => {
                if (this.selectTag.selectedIndex == i) return;
                this.selectTag.selectedIndex = i;
                document.querySelector('#div-select__list-category').innerHTML = this.selectTag[i].innerText;
                this.listCategory.classList.toggle('active');
            })
            this.listCategory.append(li)
        }
    }
}
const catalogFilter = new CatalogFilter('#div-select__btn', '#div-select__list', 'select');

const setsCatalog = [
        {
            categoryImage: './array/sets/product-icon.svg',
            category: 'Сеты',
            title: 'Саломон сет',
            weight: '1050 грамм',
            quantity: '30 кусочков',
            price: '1500 СОМ',
            image: './array/sets/img-1.jpg'
        },
        {   
            category: 'Сеты',
            title: 'Сет "5 Филадельфий"',
            weight: '1120 грамм',
            quantity: '40 кусочков',
            price: '1499 СОМ',
            image: './array/sets/img-2.jpg'
        },
        {
            category: 'Сеты',
            title: 'Филадельфия и лосось сет',
            weight: '1260 грамм',
            quantity: '36 кусочков',
            price: '1499 СОМ',
            image: './array/sets/img-3.jpg'
        },
        {
            category: 'Сеты',
            title: 'Сет "6 Филадельфий"',
            weight: '1320 грамм',
            quantity: '46 кусочков',
            price: '1559 СОМ',
            image: './array/sets/img-4.jpg'
        },
        {
            category: 'Сеты',
            title: 'Топовый сет',
            weight: '1020 грамм',
            quantity: '46 кусочков',
            price: '1559 СОМ',
            image: './array/sets/img-5.jpg'
        },
        {
            category: 'Сеты',
            title: 'Камикадзе сет',
            weight: '1200 грамм',
            quantity: '52 кусочков',
            price: '1469 СОМ',
            image: './array/sets/img-6.jpg'
        },
        {
            category: 'Сеты',
            title: 'Сет "4 Филадельфии"',
            weight: '1210 грамм',
            quantity: '32 кусочков',
            price: '1559 СОМ',
            image: './array/sets/img-7.jpg'
        },
        {
            category: 'Сеты',
            title: 'Филадельфия LOVE сет',
            weight: '1000 грамм',
            quantity: '40 кусочков',
            price: '1559 СОМ',
            image: './array/sets/img-8.jpg'
        },
        {
            category: 'Сеты',
            title: 'Якудза сет',
            weight: '1270 грамм',
            quantity: '50 кусочков',
            price: '1499 СОМ',
            image: './array/sets/img-9.jpg'
        },
        {
            category: 'Пицца',
            title: 'Карбонара',
            weight: '460 грамм',
            quantity: '1 шт',
            price: '1219 СОМ',
            image: './array/pizza/img-1.jpeg'
        },
        {
            category: 'Пицца',
            title: 'Мафия',
            weight: '570 грамм',
            quantity: '1 шт',
            price: '1319 СОМ',
            image: './array/pizza/img-2.jpeg'
        },
        {
            category: 'Пицца',
            title: 'Американо метровая',
            weight: '1265 грамм',
            quantity: '1 шт',
            price: '1559 СОМ',
            image: './array/pizza/img-3.jpeg'
        },
        {
            category: 'Пицца',
            title: 'Пепперони',
            weight: '520 грамм',
            quantity: '1 шт',
            price: '1132 СОМ',
            image: './array/pizza/img-4.jpeg'
        },
        {
            category: 'Пицца',
            title: 'Карбонара метровая',
            weight: '1265 грамм',
            quantity: '1 шт',
            price: '1559 СОМ',
            image: './array/pizza/img-5.jpeg'
        },
        {
            category: 'Пицца',
            title: 'Маргарита',
            weight: '460 грамм',
            quantity: '1 шт',
            price: '1189 СОМ',
            image: './array/pizza/img-6.jpeg'
        },
        {
            category: 'Пицца',
            title: 'Американо',
            weight: '540 грамм',
            quantity: '1 шт',
            price: '1269 СОМ',
            image: './array/pizza/img-7.jpeg'
        },
        {
            category: 'Пицца',
            title: 'Гурмео метровая',
            weight: '1300 грамм',
            quantity: '1 шт',
            price: '1569 СОМ',
            image: './array/pizza/img-8.jpeg'
        },
        {
            category: 'Пицца',
            title: 'Гурмео',
            weight: '580 грамм',
            quantity: '1 шт',
            price: '1289 СОМ',
            image: './array/pizza/img-9.jpeg'
        },
        // WOK
        {
            categoryImage: './array/wok/product-icon.svg',
            category: 'WOK',
            title: 'Рисовая лапша с курицей',
            weight: '350 грамм',
            quantity: '1 шт',
            price: '1236 СОМ',
            image: './array/wok/img-1.jpg'
        },
        {
            category: 'WOK',
            title: 'Прозрачная лапша с телятиной',
            weight: '350 грамм',
            quantity: '1 шт',
            price: '1202 СОМ',
            image: './array/wok/img-2.jpg'
        },
        {
            category: 'WOK',
            title: 'Лапша Удон в сливочном соусе',
            weight: '350 грамм',
            quantity: '1 шт',
            price: '1219 СОМ',
            image: './array/wok/img-3.jpg'
        },
        {
            category: 'WOK',
            title: 'Удон с телятиной',
            weight: '350 грамм',
            quantity: '1 шт',
            price: '1194 СОМ',
            image: './array/wok/img-4.jpg'
        },
        {
            category: 'WOK',
            title: 'Лапша Удон с креветками',
            weight: '350 грамм',
            quantity: '1 шт',
            price: '1270 СОМ',
            image: './array/wok/img-5.jpg'
        },
        {
            category: 'WOK',
            title: 'Яичная лапша вок',
            weight: '350 грамм',
            quantity: '1 шт',
            price: '1262 СОМ',
            image: './array/wok/img-6.jpg'
        },
        {
            category: 'WOK',
            title: 'Прозрачная лапша с курицей',
            weight: '350 грамм',
            quantity: '1 шт',
            price: '1169 СОМ',
            image: './array/wok/img-7.jpg'
        },
        {
            category: 'WOK',
            title: 'Удон с морепродуктами',
            weight: '350 грамм',
            quantity: '1 шт',
            price: '1229 СОМ',
            image: './array/wok/img-8.jpg'
        },
        {
            category: 'WOK',
            title: 'Лапша Удон в сливочном соусе',
            weight: '350 грамм',
            quantity: '1 шт',
            price: '1169 СОМ',
            image: './array/wok/img-9.jpg'
        },
        //роллы
        {
            category: 'Роллы',
            title: 'Лапша Удон в сливочном соусе',
            weight: '350 грамм',
            quantity: '1 шт',
            price: '1169 СОМ',
            image: './array/wok/img-9.jpg'
        },
]

for(let i = 0; i < setsCatalog.length; i ++) {
        setsCatalog[i].id = i;
}

document.querySelector('#catalog__row').addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') console.log('dsf');
    if (e.target.closest('.primary-card') == null) return;

    const idCard = e.target.closest('.primary-card').dataset.idCard;
    localStorage.setItem('idCard', idCard);

        // for (let i = 0; i < setsCatalog.length; i++) {
        //     if (card.dataset.idCard == setsCatalog[i].id) {
        //         console.log(setsCatalog[i])
        //         console.log(setsCatalog[i].title)
        //         console.log(setsCatalog[i].weight)
        //         console.log(setsCatalog[i].price)
        //     }
        // }
        // console.dir(e.target.closest('.primary-card').children[0].firstElementChild.src)

        // if (e.target.parentNode.classList)
        // if (e.target.tagName == 'BUTTON') {
        //     console.log(e.target.previousElementSibling.textContent)
        // }
})

// Оголошення класу
class Router {
    data
    constructor(pathToProducts, selectorContainer, linksMenu, categoryContainer, categoryImage) {
        this.pathToProducts = pathToProducts;
        this.container = document.querySelector(selectorContainer);
        this.menuLinks = document.querySelectorAll(linksMenu);
        this.categoryContainer = document.querySelector(categoryContainer);
        this.categoryIcon = document.querySelector(categoryImage);
        this.takeData(pathToProducts);
        this.changeCategoryItem(pathToProducts);
        this.createNavigation();
        this.showCategory();
    }

    showCategory() {
        if (localStorage != undefined) {
            location.hash = localStorage.getItem('activeCategory');
            this.categoryContainer.innerHTML = `${decodeURIComponent(location.hash).substring(1)}`;
            this.changeCategoryItem(localStorage.getItem('activeCategory'));
            return;
        }

        if (location.hash.substring(1)) {
            // this.categoryContainer.style.display = 'block';
            this.categoryContainer.innerHTML = `${decodeURIComponent(location.hash).substring(1)}`;
        } else {
            // this.categoryContainer.style.display = 'none';
        }
    }

    changeCategoryItem(catalog) {
        fetch(this.pathToProducts)
            .then(response => response.json())
            .then(json => json.forEach(card => {
                if(card.category == catalog) {
                    this.categoryIcon.src = card.categoryImage;
                }
            }))
    }

    createNavigation() {
        this.menuLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.setItem('activeCategory', link.dataset.category)
                location.hash = link.dataset.category;
                this.createCards(this.data);
                this.showCategory();
                this.changeCategoryItem(link.dataset.category);
            })
        })
    }

    takeData(path) {
        fetch(path)
            .then(res => res.json())
            .then(data => {
                this.data = data;
                this.createCards(data)
            });
    }

    createCards(products) {
        this.container.innerHTML = '';
        products.forEach(product => {        
            if ('#' + encodeURIComponent(product.category) == location.hash) {
                this.container.innerHTML +=
                    `<a href="card-product.html" class="catalog-card primary-card" data-id-card="${product.id}">
                <div class="catalog-card__img  primary-card__img">
                    <img src="${product.image}" alt="card image">
                </div>
                <div class="catalog-card__content primary-card__content">
                    <div class="catalog-card__description primary-card__description">
                        <h3>${product.title}</h3>
                        <p>${product.weight}, ${product.quantity}</p>
                    </div>
                    <div class="catalog-card__price primary-card__price">
                        <span>${product.price}</span>
                        <button class="primary-btn">Хочу!</button>
                    </div>
                </div>
                    </a>`;
            }
        })
    }   
}
const router = new Router('./db.json', '#catalog__row', '#aside__row a', '#catalog-name__heading', '#catalog-name__img');
