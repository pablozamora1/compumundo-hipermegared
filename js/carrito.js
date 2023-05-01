const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
      <h1 class="modal-header-title">Carrito De Compras</h1>
    `;
  modalContainer.append(modalHeader);

  

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "❎";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalbutton);

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>$ ${product.precio} </p>
        <span class="restar"> - </span>
        <p>${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${product.cantidad * product.precio} $</p>
        <span class="delete-product"> ❌ </span>
      `;

    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");

    restar.addEventListener("click", () => {
      if (product.cantidad !== 1) {
        product.cantidad--;
      }
      saveLocal();
      pintarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      product.cantidad++;
      saveLocal();
      pintarCarrito();
    });

    let eliminar = carritoContent.querySelector(".delete-product");

    eliminar.addEventListener("click", () => {
      eliminarProducto(product.id);
    });
  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `Total a pagar: $ ${total}`;
  modalContainer.append(totalBuying);

  const botonTotalBuying = document.createElement("button");
  botonTotalBuying.className = "BotonTotalBuying";
  botonTotalBuying.innerHTML = `FINALIZAR COMPRA`;
  modalContainer.append(botonTotalBuying);

  botonTotalBuying.addEventListener("click", ()=>{
    Swal.fire(
      'Operacion Finalizada!',
      'Disfruta tu compra!',
      'success'
    )
    localStorage.removeItem("carrito");
    carrito.length = 0 ;
    carritoCounter();
    pintarCarrito()
  })
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
  Swal.fire({
    title: 'Desea eliminar el producto?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Si',
    denyButtonText: `No`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      const foundId = carrito.find((element) => element.id === id);
  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });
      Swal.fire('Producto Eliminado!', '', 'success')
      carritoCounter();
      pintarCarrito();
    } else if (result.isDenied) {
      Swal.fire('El Producto no se elimino', '', 'info')
    }
  })
  carritoCounter();
  saveLocal();

};
const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;

  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};
carritoCounter();



