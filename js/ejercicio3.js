let users = [
    {id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer", created_at: "2022-09-26T06:25:21.118Z"},
    {id: 2, nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor", created_at: "2022-04-18T14:14:32.879Z"},
    {id: 3, nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico", created_at: "2021-12-14T11:53:38.279Z"},
    {id: 4, nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador", created_at: "2022-01-26T03:31:15.202Z"},
    {id: 5, nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef", created_at: "2022-07-27T02:06:22.760Z"},
    {id: 6, nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: "2022-05-01T22:06:35.864Z"},
]
 
// Crear una funcion que permita ordenar la lista de usuarios por fecha de creacion, de la mas nueva a la mas antigua y viceversa
// utilizando el parametro booleano reverse (si es true se ordenaran de nuevo a antiguo)
 
//13. Crear una funcion que permita filtrar los usuarios por mes y año de creacion.
 
// let month=prompt("Ingresar: ");let mes=+prompt("ingrese mes");
let anio=+prompt("ingrese año");

function filtrarUsuarios(year, month) {
    month = month - 1;
  
    const usersFilter = users.filter((element) => {
      let fecha = element.created_at;
      // console.log(fecha);
  
      let nuevoDate = new Date(fecha);
      // console.log(nuevoDate);
  
      let mes = nuevoDate.getMonth();
      // console.log(mes);
  
      let anio = nuevoDate.getFullYear();
      // console.log(anio);
  
      if (anio === year && mes === month) {
        // console.log("heh");
        return true;
      }
    });
    console.log(usersFilter);
  }
  filtrarUsuarios(anio, mes);
// Funcion para leer los usuarios
function read() {
   const root = document.getElementById("root");

   // Leer encabezados
   const keys = Object.keys(users[0]);
   console.log(keys);

   // crear tabla
   const table = document.createElement("table");
   root.append(table);

   // crear encabezados de la tabla
   const thead = document.createElement("thead");
   table.append(thead);
   const tr = document.createElement("tr");
   thead.append(tr);
   keys.forEach((key) => {
      const th = document.createElement("th");
      th.textContent = key;
      tr.append(th);
   });

   // crear cuerpo de la tabla
   const tbody = document.createElement("tbody");
   table.append(tbody);
   users.forEach((user) => {
      const tr = document.createElement("tr");
      tbody.append(tr);
      keys.forEach((key) => {
         const td = document.createElement("td");
         td.textContent = user[key];
         tr.append(td);
      });
   });
   // add and extra space
   const br = document.createElement("br");
   root.append(br);
   return;
}

// Actualizar usuarios
function update() {
   return;
}

// Eliminar usuario
function del() {
   return;
}

// Ordenar por fecha
function sort_by_date() {
   return;
}

// Filtrar por (mes o año)
function filter_by() {
   let month = prompt("Ingrese mes");
   const filtered = users.filter((user) => {
      const date = new Date(user.created_at);
      return date.getMonth() == month;
   });
}

// Funcion para crear botones
function new_button(name, color_over, color_out, event) {
   let btn = document.createElement("button");
   btn.textContent = name;
   btn.style.backgroundColor = color_over;
   btn.style.borderRadius = "10px";
   btn.style.color = "white";
   btn.style.height = "30px";
   btn.style.width = "100px";
   btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = color_over;
   });
   btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = color_out;
   });
   btn.addEventListener("click", () => {
      event();
   });
   document.body.appendChild(btn);
}

function main() {
   //create
   new_button("Crear", "green", "darkgreen", create);
   //read
   new_button("Leer", "blue", "darkblue", read);
   //update
   new_button("Actualizar", "orange", "darkorange", update);
   //delete
   new_button("Borrar", "red", "darkred", del);
   // Ordenar por fecha
   new_button("Ordenar", "purple", "darkpurple", sort_by_date);
   // Filtrar por
   new_button("Filtrar", "brown", "darkbrown", filter_by);
}

main();
