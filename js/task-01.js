"use strict";
const countCategories = document.querySelectorAll("h2").length;
console.log("Number of categories:", countCategories);

const listItems = document.querySelectorAll(".item");
listItems.forEach((item) => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.querySelectorAll("li").length );
});
