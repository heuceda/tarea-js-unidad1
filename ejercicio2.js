function consultarBaseDeDatos() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      const numero = Math.floor(Math.random() * 10);
      console.log("Número generado:", numero);

      if (numero % 2 === 0) {
        resolve("Consulta exitosa");
      } else {
        reject("Error en la consulta");
      }

    }, 3000);

  });
}

// Llamar la función y manejar el resultado
consultarBaseDeDatos()
  .then(mensaje => console.log(mensaje))
  .catch(error => console.log(error));