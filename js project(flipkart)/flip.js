

let mainSection = document.querySelector('.main');

function fetchdata() {
    fetch('http://localhost:3000/product')
        .then((res) => res.json())
        .then((data) => { 
           return  card(data);
        })
        .catch((err) => console.log( err));
}

fetchdata();

function card(data) {
    const store = data.map((ele) =>{
       
        return adddata(ele.id, ele.product_name,ele.original_price, ele.image_url)  
 } );
    mainSection.innerHTML = store.join('');  
}

function adddata(id, product_name, original_price,image_url) {
    return `
    <div class="card" data-id="${id}">

     <a href="airbuds-description.html?image_url=${encodeURIComponent(image_url)}&product_name=${encodeURIComponent(product_name)}&price=${encodeURIComponent(original_price)}">
            <div class="card-img">
           
                <img src=${image_url} />
                <h6>${product_name}</h6>
                
               
                <h6>${original_price}</h6>

            </div>
            
        </a>
   

    </div>
    `;
}


