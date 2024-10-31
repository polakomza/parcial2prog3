// ========= POPUP ===========

import { productActive, setProductActive } from "../../main";
import { handleDeleteProduct } from "../services/products";

const buttonAdd = document.getElementById("buttonAdd");
const buttonCancel = document.getElementById("cancelButton");

buttonAdd.addEventListener("click", () => {
  openModal();
});
buttonCancel.addEventListener("click", () => {
  closeModal();
});

// FUNCIONES ABRIR Y CERRAR MODAL
export const openModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "flex";

  const buttonDelete = document.getElementById('deleteButton');
  if(productActive) {
    buttonDelete.style.display = "block";
  }else {
    buttonDelete.style.display = "none";
  }

  if (productActive) {
    const name = document.getElementById("name");
    const image = document.getElementById("image");
    const price = document.getElementById("price");
    const category = document.getElementById("category");

    name.value = productActive.name;
    image.value = productActive.image;
    price.value = productActive.price;
    category.value = productActive.category;
  }
};

export const closeModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "none";
  setProductActive(null);
  resetModal();
};

const resetModal = () => {
  const name = document.getElementById("name");
  const image = document.getElementById("image");
  const price = document.getElementById("price");
  const category = document.getElementById("category");

  name.value = "";
  image.value = "";
  price.value = 0;
  category.value = "Seleccione una categoria";
};

const deleteButton = document.getElementById('deleteButton');

deleteButton.addEventListener('click', ()=>{
  handleButtonDelete();
})

const handleButtonDelete = () => {
  handleDeleteProduct();
}