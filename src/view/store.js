// ========= STORE ===========

import { setProductActive } from "../../main";
import { handleGetLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";


export const handleGetProductLocalToStore = () => {
  const products = handleGetLocalStorage();
  handleRenderList(products);
};

// se encarga de filtrar y de renderizar la seccion  con todos sus respectivos elementos
export const handleRenderList = (products) => {
  // filtrado por categorias
  const burgers = products.filter((e) => e.category === "Hamburguesas");
  const potatoes = products.filter((e) => e.category === "Papas");
  const soda = products.filter((e) => e.category === "Gaseosas");

  //   renderiza los elementos de la seccion
  const renderProductGroup = (products, title) => {
    if (products.length > 0) {
      const productsHtml = products.map((product, index) => {
        return `<div class='containerTargetItem' id="product-${product.category}-${index}">
                <div>
                <img src='${product.image}'/>
                </div>
                <div>
                <h2>${product.name}</h2>
                </div>
                <div class='targetProps'>
                <p><b>Precio:</b> $ ${product.price}</p>
                </div>
                </div>`;
      });

      //   retornar la seccion  con todos los elementos dentro
      return `
            <section class='sectionStore'>
            <div class='containerTitleSection'><h3>${title}</h3></div>
            <div class='containerProductStore'>
            ${productsHtml.join("")}
            </div>
            </section>
            `;
    } else {
      return "";
    }
  };

  // renderizar cada uno de los productos dentro de sus categorias
  const appContainer = document.getElementById("storeContainer");
  appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(potatoes, "Papas")}
    ${renderProductGroup(soda, "Gaseosas")}
    `;

  // añade los elementos de manera dinamica
  const addEvent = (products) => {
    if (products) {
      products.forEach((element, index) => {
        const productContainer = document.getElementById(
          `product-${element.category}-${index}`
        );
        productContainer.addEventListener("click", () => {
          setProductActive(element);
          openModal();
        });
      });
    }
  };

  addEvent(burgers);
  addEvent(potatoes);
  addEvent(soda);
};
