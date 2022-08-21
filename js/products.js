var categoriesArray = [];

function showCategoriesList(array) {
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let category = categoriesArray[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.image + `" alt="` + category.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ category.name + `</h4>
                        <small class="text-muted">` + category.soldCount + " " + category.cost + `</small>
                    </div>
                    <p>`+ category.description + `</p>
                </div>
            </div>
        </div>
        `
        
    }
    document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
}
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData("https://japceibal.github.io/emercado-api/cats_products/101.json").then(function (resultObj) {//PRODUCTS_URL en init.js
        if (resultObj.status === "ok") {
            categoriesArray = resultObj.data.products;
            showCategoriesList(categoriesArray);
        }
    });
});