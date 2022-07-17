const productoCarrito=(productoCargado)=>{

return `

<li class="list-group-item compras">
<input class="form-check-input me-1 eliminar" type="checkbox" value="" aria-label="...">
${productoCargado.nombre}     
<p class="precio">${productoCargado.precio}</p>
</li>
`
}