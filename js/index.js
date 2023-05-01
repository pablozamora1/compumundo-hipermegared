const shopContent = document.querySelector("#shopContent");
const verCarrito = document.querySelector("#verCarrito");
const modalContainer = document.querySelector("#modal-container");
const showAlert = document.querySelector("#showAlert");
const cantidadCarrito = document.querySelector("#cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};


const getProductos = async () => {
  const respuesta = await fetch("productos.json");
  const productos = await respuesta.json();

  productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
      <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p class="price">$ ${product.precio} </p>
    `;
  
    shopContent.append(content);
  
    let comprar = document.createElement("button");
    comprar.innerText = "ADD CARRITO ";
    comprar.className = "comprar";
  
    content.append(comprar);
  
    comprar.addEventListener("click", () => {
      const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
  
      if (repeat) {
        carrito.map((prod) => {
          if (prod.id === product.id) {
            prod.cantidad++;
          }
        });
      } else {
        carrito.push({
          id: product.id,
          img: product.img,
          nombre: product.nombre,
          precio: product.precio,
          cantidad: product.cantidad,
        });
        carritoCounter();
        saveLocal();
      }
    });
  });
}
getProductos()





