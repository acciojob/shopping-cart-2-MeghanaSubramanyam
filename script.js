//your code here
let grandTotal = 0;

function addItem() {
    let nameInput = document.getElementById("item-name-input");
    let priceInput = document.getElementById("item-price-input");

    let itemName = nameInput.value.trim();
    let itemPrice = parseFloat(priceInput.value.trim());

    // Validation
    if (itemName === "" || isNaN(itemPrice) || itemPrice < 0) {
        alert("Please enter valid item name and price.");
        return;
    }

    // Create new row
    let tableBody = document.getElementById("table-body");
    let newRow = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.setAttribute("data-ns-test", "item-name");
    nameCell.innerText = itemName;

    let priceCell = document.createElement("td");
    priceCell.setAttribute("data-ns-test", "item-price");
    priceCell.innerText = itemPrice.toFixed(2);

    newRow.appendChild(nameCell);
    newRow.appendChild(priceCell);
    tableBody.appendChild(newRow);

    // Update grand total
    grandTotal += itemPrice;
    document.querySelector("[data-ns-test='grandTotal']").innerText = grandTotal.toFixed(2);

    // Clear input fields
    nameInput.value = "";
    priceInput.value = "";
}
