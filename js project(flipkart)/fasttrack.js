let Section = document.querySelector('.fast'); 
function passdata() {
    fetch('http://localhost:3000/fasttrack')
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
        
        return includedata(ele.id, ele.product_name,ele.image_url,ele.original); 
    });
    Section.innerHTML = store.join('');  
}

function includedata(id, product_name,image_url,original) {
    // console.log(name);  

    
    return `
    <div class="card" data-id="${id}">
    <a href="airbuds-description.html?image_url=${encodeURIComponent(image_url)}&product_name=${encodeURIComponent(product_name)}&price=${encodeURIComponent(original)}">

        <div class="card-img">
         <img src="${image_url}">
            <h6>${product_name}</h6>
            <h6>${original}</h6>
           
        </div>
        </a>
    </div>
    `;
}



