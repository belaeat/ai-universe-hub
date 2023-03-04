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
                    <label onclick="showDetails('${card.id}')" for="my-modal-3"><i class="fa-solid fa-arrow-right text-xl text-red-500"></i></label>
                    
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
    console.log(modal);
    const modalContainer = document.getElementById('modal-info');
    // modalContainer.innerHTML = '';
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal');
    modalDiv.innerHTML = `    
        <div class="modal-box relative">
            <label for="my-modal-3" class="btn btn-sm btn-circle bg-red-500 outline-none absolute right-2 top-2">✕</label>
            <div class="flex">
                <div class="bg-red-50 rounded-xl p-6">
                    <h3 class="font-bold text-2xl">${modal.description}</h3>
                    <div class="flex py-8 gap-4 justify-between">
                        <div class="text-center text-xl font-semibold text-green-500 p-4 py-6 shadow-xl rounded-xl bg-white">
                            <p>${modal.pricing[0] ? modal.pricing[0].price : 'Free of Cost'}</p>
                            <p>${modal.pricing[0].plan}</p>
                        </div>
                        <div class="text-center text-xl font-semibold text-amber-500 p-4 py-6 shadow-xl rounded-xl bg-white">
                            <p>${modal.pricing[1] ? modal.pricing[1].price : 'Free of Cost'}</p>
                            <p>${modal.pricing[1].plan}</p>
                        </div>
                        <div class="text-center text-xl font-semibold text-red-500 p-4 py-6 shadow-xl rounded-xl bg-white">
                            <p>${modal.pricing[2] ? modal.pricing[2].price : 'Free of Cost'}</p>
                            <p>${modal.pricing[2].plan}</p>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>    
    `;
    modalContainer.appendChild(modalDiv);
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
