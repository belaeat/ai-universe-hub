/* 
--------------------------
        Cards Loading
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

/* 
----------------------------
        Cards Showed
----------------------------
*/

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
                    <label for="my-modal-3"><i class="fa-solid fa-arrow-right text-xl text-red-500"></i></label>
                    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box relative">
                            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
                                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        cardsContainer.appendChild(cardDiv);
    });
};


/* 
------------------------------------
        Show Details (Modal)
------------------------------------
*/

const showDetails = (id) => {

    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(URL)
        .then(res => res.json())
        .then(data => showCardsData(data.data))
};

/* 
------------------------------------
        Modal Content
------------------------------------
*/

const showCardsData = (modal) => {

}


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



loadData();
