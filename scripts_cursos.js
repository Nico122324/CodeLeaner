document.addEventListener('DOMContentLoaded', () => {
    // Carrito de compras (simulado)
    const carrito = [];
  
    // Añadir curso al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const curso = button.getAttribute('data-curso');
        const precio = parseFloat(button.getAttribute('data-precio'));
        
        carrito.push({ curso, precio });
        alert(`✅ "${curso}" añadido al carrito.\nTotal: $${carrito.reduce((sum, item) => sum + item.precio, 0).toFixed(2)}`);
        
        console.log('Carrito actual:', carrito); // Para depuración
      });
    });
  });