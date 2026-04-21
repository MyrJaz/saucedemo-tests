function clasificarTriangulo(a, b, c) {
  if (arguments.length !== 3) {
    throw new Error('Número de parámetros inválido');
  }
  if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
    throw new Error('Los parámetros deben ser enteros');
  }
  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error('Longitudes no válidas');
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    throw new Error('No es un triángulo');
  }
  if (a === b && b === c) {
    return 'Equilátero';
  }
  if (a === b || b === c || a === c) {
    return 'Isósceles';
  }
  return 'Escaleno';
}

module.exports = { clasificarTriangulo };