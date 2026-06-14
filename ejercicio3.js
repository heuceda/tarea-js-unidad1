
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


async function ejecutarConsulta() {
  try {
    const resultado = await consultarBaseDeDatos();
    console.log(resultado); 
  } catch (error) {
    console.log(error); 
  }
}

ejecutarConsulta();