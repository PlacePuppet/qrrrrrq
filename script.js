const search = () => {
    const searchbox = document.getElementById("search-bar").value.trim().toUpperCase();
    const products = document.querySelectorAll(".d-food-items > div");
    
    for (let i = 0; i < products.length; i++) {
        const category = products[i].querySelector('.category-name').innerText.trim().toUpperCase();
        const dishNames = products[i].querySelectorAll('.dish-name');

        let found = category.includes(searchbox);

        if (!found) {
            dishNames.forEach(dish => {
                if (dish.innerText.trim().toUpperCase().includes(searchbox)) {
                    found = true;
                }
            });
        }

        products[i].style.display = found ? "" : "none";
    }
}

// Address for Checkout

document.getElementById('add-address').addEventListener('click',addAddress);

document.getElementById('m-add-address').addEventListener('click',addAddress);

function addAddress(){
    var address= prompt('Enter your address','');
    if(address){
        document.getElementById('add-address').innerText= ' ' + address;
    }
    else{
        alert("Address not added")


    }
}

