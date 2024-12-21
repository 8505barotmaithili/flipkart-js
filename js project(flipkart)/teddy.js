let Section = document.querySelector('.teddybox'); 
function passdata() {
    fetch('http://localhost:3000/teddy')
        .then((res) =>{
            return  res.json()
        }
           )
        .then((data) => { 
            console.log(data); 
           return  cards(data); 
            
            
        })
        .catch((err) => console.log(err));
}

passdata();

function cards(info) {
   
    const store = info.map((ele) => {
        
        return includedata(ele.id, ele.name,ele.image_url,ele.original_price); 
    });
    Section.innerHTML = store.join('');  
}

function includedata(id, name,image_url,original_price) {
    // console.log(name);  

    
    return `
    <div class="card" data-id="${id}">
    <a href="airbuds-description.html?image_url=${encodeURIComponent(image_url)}&product_name=${encodeURIComponent(name)}&price=${encodeURIComponent(original_price)}">

        <div class="card-img">
         <img src="${image_url}">
            <h6>${name}</h6>
            <h6>${original_price}</h6>
           
        </div>
        </a>
    </div>
    `;
}



