// Creación del objeto con valores estándar.
var auto = {
  patente: "",
  color: "",
  modelo: "",
  marca: "",

  mover: function() {
    console.log("hace algo...");
  }
};

// Variables con valores estándar para luego asignárselas a un objeto.
var nroDePatente = 123;
var colorDelAuto = #fff;

var auto2 = {
  patente: nroDePatente //Asigno el valor que obtuve en la variable de arriba.
  color: colorDelAuto, //Asigno el valor que obtuve en la variable de arriba.
};

var auto3 = {
  color: auto.color; //Tomo del objeto auto, el mismo color que viene originalmente.
}


//////// OBJETO ADENTRO DE OTRO OBJETO
auto3.location = {
    country: 'ar',
    city: 'ba'
};

auto3.owner = {
    dni: 123123,
    cedula: [auto, auto, auto],
    masPropiedades: {
        nombre: 'Nahuel',
        apellido: 'Lema'
    }
};


// Recorrer un objeto
// La sintaxis KEY hace que se escriba el "nombre de la variable"
for (var key in auto) {
  console.log(key, auto[key]);
};
