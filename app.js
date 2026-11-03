// mock-data
const products = [
    { name: "Hörlurar", category: "Elektronik", price: 1000, icon: "🎧"},
    { name: "Hoodie", category: "Kläder", price: 500, icon: "👕"},
    { name: "Tagentbord", category: "Elektronik", price: 1500, icon: "⌨️"},
    { name: "Keps", category: "Kläder", price: 200, icon: "🧢"},
    { name: "Gamingmus", category: "Elektronik", price: 600, icon: "🖱️"},
]

const productsContainer = document.getElementById("product-container");
const categorySelect = document.getElementById("filter-category");
const sortSelect = document.getElementById("sort-price");
const discountBtn = document.getElementById("btn-discount");

//console.log(categorySelect.value)
//console.log(sortSelect.value)
//console.log(products);

const updateList = () => {
    // logik för att uppdatera listan
    let result = [...products]

    // 1. Filter
    result = result.filter(item => {
        if (categorySelect.value === item.category || categorySelect.value === "alla") {
            return true
        } 
    })

    // 2. Sort
    if (sortSelect.value === "low-high") {
        result.sort((a, b) => a.price - b.price)
    } else if (sortSelect.value === "high-low") {
        result.sort((a, b) => b.price - a.price)
    }

    render(result)
}

const render = result => {
    productsContainer.innerHTML = ``

    result.forEach(product => {
        const card = document.createElement(`div`)
        card.className = `product-card`

        card.innerHTML = `
                    <div class="product-icon">${product.icon}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${product.price}</div>
                    <div class="product-category">${product.category}</div>
        `
        productsContainer.appendChild(card)
    })
}

// lyssnare till ändring i fälten
categorySelect.addEventListener("change", updateList);
sortSelect.addEventListener("change", updateList);

updateList()