function handleLogin(event){
    event.preventDefault();
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

/*

if(username === "yusuf@123.com" && password === "123456789") {
    alert("login successful");
    window.location.href = "food_ordering.html";
}
else
{
    alert("Invalid username or password");
}

*/
}

var price = 0;
var total_price = 0;
var orderlist = [];


function Addorder()
{
    var pizza = document.getElementById("pizza").value;
   

    if(pizza == "margherita") {
        alert("You have ordered a Margherita pizza");
        price = 100;
    }
    else if(pizza == "pepperoni") {
        alert("You have ordered a Pepperoni pizza");
        price = 120;
    }
    else if(pizza == "chicken_ranch") {
        alert("You have ordered a Chicken Ranch pizza");
        price = 150;
    }
    else if(pizza == "veggie") {
        alert("You have ordered a Veggie pizza");
        price = 110;
    }
    else if(pizza == "bbq_chicken") {
        alert("You have ordered a BBQ Chicken pizza");
        price = 130;
    }


        total_price += price;

        orderlist.push(document.getElementById("pizza").value);
        orderlist.push(price + " EGP");

}

function handleOrder()
{   
    if(total_price === 0) {
        alert("Please select a pizza to order.");
    }
    else {
        document.getElementById("ordertotal").innerText = "Total price: " + total_price + " EGP";
        alert(`total price: ${total_price} EGP`);
    }
}




function neworder()
{
    document.getElementById("pizza").value = "";
    document.getElementById("ordertotal").innerText = "";
    price = 0;
    total_price = 0;
    pizza = document.getElementById("pizza").value;
    orderlist = [];
    document.getElementById("orderdetails").innerText = "";
}

function orders()
{

   orderlist.forEach(function(item) {
        document.getElementById("orderdetails").innerText += item + "\n";
    });
}
