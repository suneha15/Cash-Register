const billAmount = document.querySelector("#bill-amount");

const cashAmount = document.querySelector("#cash-given");

const checkButton = document.querySelector("#check-button");

const message = document.querySelector("#error-message");

const noOfNotes = document.querySelector(".no-of-notes");

const availableNotes = [2000, 500, 100, 50, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {

    console.log("clicked");
    console.log("input", billAmount.value);
    console.log("input", cashAmount.value);

    hideMessage();

    if (billAmount.value > 0) {

        if (cashAmount.value >= billAmount.value) {

            const amountToBeReturned = cashAmount.value - billAmount.value;

            console.log(amountToBeReturned)

            calculateChange(amountToBeReturned);

        } else {
            showMessge("Do you wanna wash plates?");
        }

    } else {
        showMessge("Invalid Bill Amount")
    }

});


function calculateChange(amountReturned) {
    console.log("change");

    for (let i = 0; i < availableNotes.length; i++) {

        const numberOfNotes = Math.trunc(amountReturned / availableNotes[i]);

        amountReturned = amountReturned % availableNotes[i];

        noOfNotes[i].innerText = numberOfNotes;
    }
};

function hideMessage() {
    message.style.display = "none";
}

function showMessge(reply) {
    console.log("here");
    message.style.display = "block";
    message.style.backgroundColor = "#F87171";
    message.innerText = reply;
}