import Swal from "sweetalert2";

import { productActive } from "../../main";
import {
  handleGetLocalStorage,
  setInLocalStorage,
} from "../persistence/localStorage";
import { closeModal } from "../view/modal";
import { handleGetProductLocalToStore, handleRenderList } from "../view/store";

// ========= PRODUCTOS ==========
const buttonAccept = document.getElementById("acceptButton");

// guardamos
buttonAccept.addEventListener("click", () => {
  saveElement();
});

// FUNCION DE GUARDAR
const saveElement = () => {
  const name = document.getElementById("name").value;
  const image = document.getElementById("image").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;

  let dataObject = null;

  if (productActive) {
    dataObject = { ...productActive, name, image, price, category };
  } else {
    dataObject = {
      id: new Date().toISOString(),
      name,
      image,
      price,
      category,
    };
  }

  Swal.fire({
    title: "Correcto!",
    text: "Producto Guardado!",
    icon: "success"
  });

  setInLocalStorage(dataObject);
  handleGetProductLocalToStore();
  closeModal();
};

// ======= ELIMINAR ========

export const handleDeleteProduct = () => {
  Swal.fire({
    title: "¿Desea eliminar el producto?",
    text: "si lo eliminas sera permanentemente!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar!",
  }).then((result) => {
    if (result.isConfirmed) {
      const products = handleGetLocalStorage();
      const result = products.filter((el) => el.id !== productActive.id);

      // setear el nuevo array
      localStorage.setItem("products", JSON.stringify(result));
      const newProducts = handleGetLocalStorage();
      handleRenderList(newProducts);
      closeModal();
      Swal.fire({
        title: "eliminado!",
        text: "Tu producto ha sido eliminado.",
        icon: "success",
      });
    }else {
      closeModal();
    }
  });
};
