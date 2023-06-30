const orderForm = document.querySelector("#order-form");
const orderInput = document.querySelector("#order-form input");
const result = document.querySelector("#order");

function orderSubmit(event){
    event.preventDefault();
    orderForm.classList.add("hidden");
    const menuName = orderInput.value;
    result.innerText = `Hello ${menuName} !`;
    result.classList.remove("hidden");
}

orderForm.addEventListener("submit", orderSubmit);