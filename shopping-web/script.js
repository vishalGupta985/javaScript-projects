
document.addEventListener('DOMContentLoaded', () =>{
    const content = document.querySelector('.content')
    console.log(content);
    

    async function fetchData (){
        const API_URL = "https://fakestoreapi.com/products";
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            
            displayData(data);
        } catch (err) {
            
        }
    }
    fetchData();

    function displayData(data){
        // console.log(data);
        let itemHtml;
        const alldata = data.map((item) =>{
            return itemHtml = `<div class="item">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <img src="${item.image}" alt="" class="item-img">
                <div class="item-footer">
                    <h2 class="price">$ ${item.price}</h2>
                    <button class="add-to-card-btn">add to card</button>
                </div>
            </div>`;

        })
        // console.log(alldata);
        
        content.innerHTML = alldata;
        // header.appendChild(allitems);
    }
})