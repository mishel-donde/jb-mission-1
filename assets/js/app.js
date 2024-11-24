function collectData() {
    const productName = document.getElementById('productName').value
    const price = document.getElementById('price').value
    const productCategory = document.getElementById('productCategory').value
    const imageUrl = document.getElementById('imageUrl').value
    return {
        productName: productName,
        price:price,
        productCategory: productCategory,
        imageUrl:imageUrl
    }   
}

function generateHTML(data) {
    const newHTML = `
        <tr>
            <td>${data.productName}</td>
             <td>${data.price}</td>
              <td>${data.productCategory}</td>
             <td><img src="${data.imageUrl}" class="color-cell" /></td>
        </tr>    
    `
    return newHTML
}

function renderHTML(newHTML) {
    const tableBody = document.getElementById('tableBody')
    tableBody.innerHTML += newHTML
}

function validateForm(data) {
    
    if (!data.productName || !data.price || !data.productCategory || !data.imageUrl) {
        alert("you don't do all ");
        return false;
    }
    return true;
}


function resetForm() {
    const productForm = document.getElementById('productForm');
    productForm.reset();
}

function doAll(event) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    renderHTML(newHTML)
    validateForm(data)
    resetForm()
    
}
