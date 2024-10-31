import { setInLocalStorage } from "./src/persistence/localStorage";
import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { handleGetProductLocalToStore } from "./src/view/store";
import "./style.css";

// ========== APLICACION ==============
export let categoryActive = null;

export const setCategoryActive = (category) => {
  categoryActive = category;
};

export let productActive = null;

export const setProductActive = (product) => {
  productActive = product;
};

handleGetProductLocalToStore();
renderCategories();

// ButtonSearch
const buttonSearch = document.getElementById('buttonSearch');
buttonSearch.addEventListener('click',()=>{
    handleSearchProductByName();
})

