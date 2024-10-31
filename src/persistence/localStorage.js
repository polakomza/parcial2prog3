// ==== LOCALSTORAGE ====

// trae todos los productos
export const handleGetLocalStorage = () => {
  const products = JSON.parse(localStorage.getItem("products"));
  if (products) {
    return products;
  } else {
    return [];
  }
};

// guardar en el localStorage
export const setInLocalStorage = (product) => {
  if (product) {
    // trae los productos
    let productsInLocal = handleGetLocalStorage();

    const existingIndex = productsInLocal.findIndex(
      (productLocal) => productLocal.id == product.id
    );

    // verificar si el elemento existe
    if (existingIndex !== -1) {
        // si existe debe reemplazarse
      productsInLocal[existingIndex] = product;
    } else {
        // sino se agrega
      productsInLocal.push(product);
    }

    // setear el nuevo array
    localStorage.setItem("products", JSON.stringify(productsInLocal));
  }
};
