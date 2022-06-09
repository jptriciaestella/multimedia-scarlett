var OPENED_PRODUCT_STORAGE_KEY = 'OPENED_PRODUCT_STORAGE'
var OPENED_CATEGORY_STORAGE_KEY = 'OPENED_CATEGORY_STORAGE'

jQuery(() => {
    if(localStorage.getItem(OPENED_PRODUCT_STORAGE_KEY) == null){
        window.open("../", "_self")
    }
    updateData()
    $("title").text(localStorage.getItem(OPENED_PRODUCT_STORAGE_KEY))
})

function updateData(){
    let productsData
    $.getJSON("../Assets/productsdata.json", data => {
        productsData = data
    }).done(() => {
        Object.entries(productsData).forEach(
            productData => {
                productUpdater(productData[0], productData[1])
            }
        )
    })
}

function productUpdater(category, products){
    products.forEach(
        product => {
            updateProductExplanation(category, product)
            return true
        }
    )
}

function updateProductExplanation(category, product){
    if(product["name"] === localStorage.getItem(OPENED_PRODUCT_STORAGE_KEY) && category === localStorage.getItem(OPENED_CATEGORY_STORAGE_KEY)){
        $(".product-explanation").append(`
            <img src="../Assets/Products/`+ product["picture"] +`" alt="product-image">
            <div class="product-description">
                <h1>`+ product["name"] +`</h1>
                <p>`+ product["description"] +`</p>
                <ul class="benefit-list">
                </ul>
            </div>
        `)
        product["benefits"].forEach(benefit => {
                $(".benefit-list").append(`
                    <li>`+ benefit +`</li>
                `)
            }
        )
    }   
}