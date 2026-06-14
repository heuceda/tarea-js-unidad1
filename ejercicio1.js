async function obtenerUsuarios() {
  try {
    // Hacer la petición
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');

    // Convertir la respuesta a JSON
    const usuarios = await respuesta.json();

    // Iterar y mostrar
    usuarios.forEach(usuario => {
      console.log(`Nombre: ${usuario.name}, Email: ${usuario.email}`);
    });

  } catch (error) {
    console.log('Ocurrió un error:', error);
  }
}

obtenerUsuarios();