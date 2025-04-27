let grandTotal = 0;

function addItem() {
    let nameInput = document.getElementById("item-name-input");
    let priceInput = document.getElementById("item-price-input");

    let itemName = nameInput.value.trim();
    let itemPrice = parseFloat(priceInput.value.trim());

    if (itemName === "" || isNaN(itemPrice) || itemPrice < 0) {
        return; // Invalid input, do nothing
    }

    // Create new row
    let newRow = document.createElement("tr");

    // Create name cell
    let nameCell = document.createElement("td");
    nameCell.setAttribute("data-ns-test", "item-name");
    nameCell.innerText = itemName;

    // Create price cell
    let priceCell = document.createElement("td");
    priceCell.setAttribute("data-ns-test", "item-price");
    priceCell.innerText = itemPrice;

    // Append cells to row
    newRow.appendChild(nameCell);
    newRow.appendChild(priceCell);

    // Append row to table body
    document.getElementById("table-body").appendChild(newRow);

    // Update grand total
    grandTotal += itemPrice;

    // Important: No `.00`
    document.querySelector("[data-ns-test='grandTotal']").innerText = Math.floor(grandTotal);

    // Clear inputs
    nameInput.value = "";
    priceInput.value = "";
}

