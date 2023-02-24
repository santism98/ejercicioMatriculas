let numMatricula = prompt('Inserte matricula con formato 0000ZZZ');

const mostrarDatos = async () => {
  try {
    // Obtener los datos del coche
    const coche = await getMatricula(numMatricula);
    const baja = await getBaja(coche.baja);
    const propietario = await getMulta(coche.id);

    // Almacenar los datos en Local Storage
    localStorage.setItem('coche', JSON.stringify(coche));
    localStorage.setItem('baja', JSON.stringify(baja));
    localStorage.setItem('propietario', JSON.stringify(propietario));

    // Crear la tabla en el DOM
    const table = document.createElement('table');
    const thead = table.createTHead();
    const tbody = table.createTBody();

    // Agregar encabezados a la tabla
    const rowHead = thead.insertRow();
    const headers = ['ID', 'Matrícula', 'Modelo', 'Dado de Baja', 'Nombre', 'Teléfono', 'Dirección', 'Multas'];
    headers.forEach(header => {
      const cell = rowHead.insertCell();
      cell.innerHTML = header;
    });

    // Agregar datos del coche a la tabla
    const rowCoche = tbody.insertRow();
    const dataCoche = [coche.id, coche.matricula, coche.modelo, baja.baja, '', '', '', ''];
    dataCoche.forEach(data => {
      const cell = rowCoche.insertCell();
      cell.innerHTML = data;
    });

    // Agregar datos del propietario a la tabla
    const rowProp = tbody.insertRow();
    const dataProp = ['', '', '', '', propietario.nombre, propietario.telefono, propietario.direccion, propietario.multas];
    dataProp.forEach(data => {
      const cell = rowProp.insertCell();
      cell.innerHTML = data;
    });

    // Agregar la tabla al DOM
    document.body.appendChild(table);
  } catch (error) {
    console.log(error);
  }
}

mostrarDatos();