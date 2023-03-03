/* 
--------------------------
        Data Loading
--------------------------
*/
const loadData = () => {
    const URL = 'https://openapi.programming-hero.com/api/ai/tools';
    fetch(URL)
        .then(res => res.json())
        .then(data => showData(data.data.tools));
    // .then(data => console.log(data.data.tools));


}

const showData = (cards) => {
    // console.log(cards[0].image);    
    cards.forEach((card) => {
        const cardsContainer = document.getElementById('cards-container');
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
                        <button id="details-btn"><i class="fa-solid fa-arrow-right text-xl text-red-500"></i></button>
                    </div>
                </div>
            </div>
        `;
        cardsContainer.appendChild(cardDiv);
    });
};

loadData();

/* 
<li class="my-2">1. Natural Language Processing</li>
                            <li class="my-2">2. Contectual understanding</li>
                            <li class="my-2">3. Text generation</li>
*/