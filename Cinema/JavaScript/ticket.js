const tickets = document.querySelectorAll(".ticket");
const orderList = document.querySelector("#order-items");
const ticketCount = document.querySelector("#ticket-count");
const totalPrice = document.querySelector("#total");

function counter(node, min, max, initial) {
    let count = initial;

    const qty = node.querySelector(".qty");
    const minusBtn = node.querySelector(".minus");
    const plusBtn = node.querySelector(".plus");

    qty.textContent = count;

    //decrease qty
    minusBtn.addEventListener("click", function () {
        if (count - 1 < min) {
            count = min;
        }
        else {
            count -= 1;
        }
        qty.textContent = count;
        updateSummary();
    });

    //increase qty
   plusBtn.addEventListener("click", function () {
    if (count + 1> max) {
        count = max;
    }
    else {
        count += 1;
    }
    qty.textContent = count;
    updateSummary();
   });
}

function updateSummary() {
    let count = 0;
    let total = 0;
    orderList.innerHTML = ""; //clear previous order summary

    //calc qty and ticket price
    tickets.forEach(function(ticket) {
        let qty = Number(ticket.querySelector(".qty").textContent);
        let price = Number(ticket.querySelector(".price").textContent.replace("RM", ""));

        count += qty;
        total += qty * price;

        //display selected tickets
        if (qty > 0) {
            let li = document.createElement("li");
            li.textContent = ticket.querySelector("h3").textContent + " x" + qty + " - RM " + (qty * price).toFixed(2);
            orderList.appendChild(li);
        }
    });

    if (count == 0) {
        orderList.textContent = "No tickets selected";
    }

    ticketCount.textContent = count;
    totalPrice.textContent = "RM " + total.toFixed(2);
}

//select and activate al ticket counters
const counters = document.querySelectorAll(".counter");

counters.forEach(function(node) {
    counter(node, 0, 10, 0);
});

updateSummary();