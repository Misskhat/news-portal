const loadCatagory = async() =>{
    const responce = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data  = await responce.json();
    const categoryContainer =document.getElementById('category_container');
    data.data.news_category.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `<button>${element.category_name}</button>`
        categoryContainer.appendChild(div)
    });
}

loadCatagory()