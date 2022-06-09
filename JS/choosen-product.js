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
        $(".buy-product").append(`
            <p>Buy our products on:</p>
            <a href="https://www.tokopedia.com/search?q=`+ product["name"]  + " Scarlett-Whitening" +`">
            <img src="../Assets/SocialMedia/tokped-horizontal.png" alt="tokopedia">
            </a>
            <a href="https://shopee.co.id/search?keyword=`+ product["name"]  + " Scarlett-Whitening" +`">
            <img src="../Assets/SocialMedia/shopee-horizontal.png" alt="shopee">
            </a>
            <a href="https://www.sociolla.com/search?q=`+ product["name"] + " Scarlett-Whitening" +`">
            <img src="../Assets/SocialMedia/sociolla.jpg" alt="sociolla" ">
            </a>
        `)
        index = 0
        product["reviews"].forEach(review => {
            $(".product-reviews").append(`
                <div class="review">
                    <p class="review-text">
                        `+ review +`
                    </p>
                    <p class="reviewer">
                        - `+ product["reviewers"][index++] +`
                    </p>
                </div>
            `)
        })
    }   
}