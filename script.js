document.addEventListener("DOMContentLoaded", function () {
    updateProductCount();
});

// Function to switch sections
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Function to add a product dynamically
function addProduct() {
    const productList = document.getElementById("product-list");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>New Product</td>
        <td>$15.00</td>
        <td>20</td>
        <td>
            <button class="btn delete-btn" onclick="deleteProduct(this)">Delete</button>
        </td>
    `;

    productList.appendChild(newRow);
    updateProductCount();
}

// Function to delete a product
function deleteProduct(button) {
    button.parentElement.parentElement.remove();
    updateProductCount();
}

// Function to update product count
function updateProductCount() {
    document.getElementById("product-count").innerText = document.querySelectorAll("#product-list tr").length;
}
