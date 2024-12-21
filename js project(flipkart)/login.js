

let button = document.getElementById("btn1");

button.addEventListener("click", (event) => {
    event.preventDefault();
    
    let mob = document.getElementById('mob').value;
    let arr = JSON.parse(localStorage.getItem("mobileno")) || []; 

    if (mob.length !== 10 || isNaN(mob)) {
        alert("Please enter a valid 10-digit mobile number.");
        return; 
    }

    let user = arr.find(item => item.mob === mob);
    
    if (user) {
       
        alert("Login successful!");
       
        window.location.href = "index.html";
    } else {
        
        alert("Invalid mobile number. Please sign up first.");
    }
});
