const tareas = [];

function agregarTarea(descripcion) {
  tareas.push({ descripcion, completada: false });
}

function marcarTareaComoCompletada(descripcion) {
  const tarea = tareas.find(t => t.descripcion === descripcion);
  if (tarea) tarea.completada = true;
}

function listarTareasPendientes() {
  return tareas.filter(t => !t.completada);
}

function listarTareasCompletadas() {
  return tareas.filter(t => t.completada);
}

// Uso
agregarTarea("Comprar leche");
agregarTarea("Llamar al médico");
agregarTarea("Estudiar JavaScript");

marcarTareaComoCompletada("Comprar leche");

console.log("=== Todas las tareas ===");
console.log(tareas);
console.log("\n");

console.log("=== Tareas pendientes ===");
listarTareasPendientes().forEach(t => console.log(" -", t.descripcion));
console.log("\n");

console.log("=== Tareas completadas ===");
listarTareasCompletadas().forEach(t => console.log(" -", t.descripcion));