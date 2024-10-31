// ======== GATEGORIAS ==========

import { categoryActive } from "../../main";
import { handleGetLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../view/store";

const handleFilterProductsCategory = (category) => {
  const products = handleGetLocalStorage();

  switch (category) {
    case categoryActive:
      handleRenderList(products);
      break;
    case "Todo":
      handleRenderList(products);
      break;
    case "Hamburguesas":
    case "Papas":
    case "Gaseosas":
      const result = products.filter((el) => el.category === category);
      handleRenderList(result);

    default:
      break;
    case "MayorPrecio":
      const resultPriceMajor = products.sort((a, b) => b.price - a.price);
      handleRenderList(resultPriceMajor);

      break;
    case "MenorPrecio":
      const resultPriceMinor = products.sort((a, b) => a.price - b.price);
      handleRenderList(resultPriceMinor);
      break;
  }
};

// render de la vista categorias

export const renderCategories = () => {
  // tomamos elementos de la lista
  const ulList = document.getElementById("listFilter");

  // creamos esos elementos dentro de la lista
  ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="MayorPrecio">Mayor Precio</li>
    <li id="MenorPrecio">Menor Precio</li> `;

  // añadimos evento click
  const liElements = ulList.querySelectorAll("li");
  liElements.forEach((liElement) => {
    liElement.addEventListener("click", () => {
      handleClick(liElement);
    });
  });

  // verificamos y manejamos el estilo del elemento activo
  const handleClick = (element) => {
    handleFilterProductsCategory(element.id);
    liElements.forEach((e) => {
      if (e.classList.contains("liActive")) {
        e.classList.remove("liActive");
      } else {
        if (element == e) {
          e.classList.add("liActive");
        }
      }
    });
  };
};
