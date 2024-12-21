


let button = document.getElementById("btn1");
let arr = JSON.parse(localStorage.getItem("mobileno")) || []; 

button.addEventListener("click", (event) => {
    event.preventDefault();
    
  
    let mob = document.getElementById('mob').value;
    
    if (mob === "") {
        alert("Please enter a mobile number.");
        return; 
    }
    if (mob.length !== 10 || isNaN(mob)) {
        alert("Please enter a valid 10-digit mobile number.");
        return; 
    }
  
    if (arr.some(item => item.mob === mob)) {
        alert("Mobile number already registered!");
        return; 
    }
    
    
    let number = {
        mob: mob
    };
    arr.push(number);

   
    localStorage.setItem("mobileno", JSON.stringify(arr));
    
    console.log(localStorage.getItem("mobileno"));
    
   
    window.location.href = "index.html";
});
