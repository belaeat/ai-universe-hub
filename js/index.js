
const loadData = () =>{
    const URL = 'https://openapi.programming-hero.com/api/ai/tools';
    fetch (URL)
    .then (res => res.json())
    .then (data => console.log(data));
}


loadData();