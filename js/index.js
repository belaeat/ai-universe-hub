/* 
--------------------------
        Data Loading
--------------------------
*/
const loadData = () => {
    const URL = 'https://openapi.programming-hero.com/api/ai/tools';
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            showData(data.data.tools.slice(0, 6))
        });
}

const showData = (cards) => {
    // console.log(cards[0].image);
    const cardsContainer = document.getElementById('cards-container'); 
    cardsContainer.innerHTML = '';   
    cards.forEach((card) => {        
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
        <div class="card card-compact w-96 h-96 bg-base-100 shadow-xl p-2">
                <figure><img src="${card.image}" alt="" /></figure>
                <div class="card-body">
                    <div>
                        <h3 class="text-xl font-bold mb-2">Features</h3>
                        <p>1. ${card.features[0]}</p>
                        <p>2. ${card.features[1]}</p>
                        <p>3. ${card.features[2]}</p>
                    </div>
                    <hr>
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-xl font-bold mb-2">${card.name}</h3>
                            <p>${card.published_in}</p>
                        </div>
                        <button onclick=showDetails('${card.id}') id="details-btn"><i class="fa-solid fa-arrow-right text-xl text-red-500"></i></button>
                    </div>
                </div>
            </div>
        `;
        cardsContainer.appendChild(cardDiv);
    });
};


/* 
--------------------------
        Show Details
--------------------------
*/

const showDetails = (id) => {
    // console.log(id)
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(URL)
        .then(res => res.json())
        .then(data => console.log(data))
    // console.log(URL);
};

/* 
------------------------------
        Show All Cards
------------------------------
*/

const showAllData = () => {
    const URL = 'https://openapi.programming-hero.com/api/ai/tools';
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            showData(data.data.tools)
        });
}


/* 
const showAll = document.getElementById('show-all');

    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none')
    } */

loadData();

/* 
https://openapi.programming-hero.com/api/ai/tool/${id}
*/