const { clasificarTriangulo } = require('./triangle');

// ── Clases de Equivalencia Válidas ──────────────────────────────

test('Triángulo equilátero', () => {
  // Arrange
  const a = 3;
  const b = 3;
  const c = 3;
  const expected = 'Equilátero';

  // Act
  const result = clasificarTriangulo(a, b, c);

  // Assert
  expect(result).toBe(expected);
});

test('Triángulo isósceles AB', () => {
  // Arrange
  const a = 5;
  const b = 5;
  const c = 3;
  const expected = 'Isósceles';

  // Act
  const result = clasificarTriangulo(a, b, c);

  // Assert
  expect(result).toBe(expected);
});

test('Triángulo isósceles BC', () => {
  // Arrange
  const a = 3;
  const b = 5;
  const c = 5;
  const expected = 'Isósceles';

  // Act
  const result = clasificarTriangulo(a, b, c);

  // Assert
  expect(result).toBe(expected);
});

test('Triángulo isósceles AC', () => {
  // Arrange
  const a = 5;
  const b = 3;
  const c = 5;
  const expected = 'Isósceles';

  // Act
  const result = clasificarTriangulo(a, b, c);

  // Assert
  expect(result).toBe(expected);
});

test('Triángulo escaleno', () => {
  // Arrange
  const a = 3;
  const b = 4;
  const c = 5;
  const expected = 'Escaleno';

  // Act
  const result = clasificarTriangulo(a, b, c);

  // Assert
  expect(result).toBe(expected);
});

// ── Clases de Equivalencia Inválidas ────────────────────────────

test('Lado A mayor que suma de B y C', () => {
  // Arrange
  const a = 10;
  const b = 3;
  const c = 5;
  const expected = 'No es un triángulo';

  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow(expected);
});

test('Lado B mayor que suma de A y C', () => {
  // Arrange
  const a = 3;
  const b = 10;
  const c = 5;
  const expected = 'No es un triángulo';

  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow(expected);
});

test('Lado C mayor que suma de A y B', () => {
  // Arrange
  const a = 3;
  const b = 4;
  const c = 10;
  const expected = 'No es un triángulo';

  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow(expected);
});

test('Un lado es cero', () => {
  // Arrange
  const a = 0;
  const b = 4;
  const c = 5;
  const expected = 'Longitudes no válidas';

  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow(expected);
});

test('Un lado es negativo', () => {
  // Arrange
  const a = -3;
  const b = 4;
  const c = 5;
  const expected = 'Longitudes no válidas';

  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow(expected);
});

test('Un lado es número flotante', () => {
  // Arrange
  const a = 3.5;
  const b = 4;
  const c = 5;
  const expected = 'Los parámetros deben ser enteros';

  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow(expected);
});

test('Parámetros insuficientes', () => {
  // Arrange
  const expected = 'Número de parámetros inválido';

  // Act & Assert
  expect(() => clasificarTriangulo(3, 4)).toThrow(expected);
});

test('Parámetros excesivos', () => {
  // Arrange
  const expected = 'Número de parámetros inválido';

  // Act & Assert
  expect(() => clasificarTriangulo(3, 4, 5, 6)).toThrow(expected);
});

// ── Condiciones de Frontera ──────────────────────────────────────

test('Isósceles casi equilátero', () => {
  // Arrange
  const a = 5;
  const b = 5;
  const c = 4;
  const expected = 'Isósceles';

  // Act
  const result = clasificarTriangulo(a, b, c);

  // Assert
  expect(result).toBe(expected);
});

test('Escaleno casi isósceles', () => {
  // Arrange
  const a = 5;
  const b = 6;
  const c = 8;
  const expected = 'Escaleno';

  // Act
  const result = clasificarTriangulo(a, b, c);

  // Assert
  expect(result).toBe(expected);
});

test('Triángulo muy pequeño', () => {
  // Arrange
  const a = 1;
  const b = 1;
  const c = 1;
  const expected = 'Equilátero';

  // Act
  const result = clasificarTriangulo(a, b, c);

  // Assert
  expect(result).toBe(expected);
});

test('Triángulo muy grande', () => {
  // Arrange
  const a = 999999;
  const b = 999999;
  const c = 999999;
  const expected = 'Equilátero';

  // Act
  const result = clasificarTriangulo(a, b, c);

  // Assert
  expect(result).toBe(expected);
});

test('BananaLado corto en primera posición', () => {
  // Arrange
  const a = 1;
  const b = 1000;
  const c = 1000;
  const expected = 'Isósceles';

  // Act
  const result = clasificarTriangulo(a, b, c);

  // Assert
  expect(result).toBe(expected);
});

test('BananaLado corto en segunda posición', () => {
  // Arrange
  const a = 1000;
  const b = 1;
  const c = 1000;
  const expected = 'Isósceles';

  // Act
  const result = clasificarTriangulo(a, b, c);

  // Assert
  expect(result).toBe(expected);
});

test('BananaLado corto en tercera posición', () => {
  // Arrange
  const a = 1000;
  const b = 1000;
  const c = 1;
  const expected = 'Isósceles';

  // Act
  const result = clasificarTriangulo(a, b, c);

  // Assert
  expect(result).toBe(expected);
});

test('BananaTriángulo degenerado C igual suma A más B', () => {
  // Arrange
  const a = 3;
  const b = 4;
  const c = 7;
  const expected = 'No es un triángulo';

  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow(expected);
});

test('BananaTriángulo degenerado A igual suma B más C', () => {
  // Arrange
  const a = 7;
  const b = 3;
  const c = 4;
  const expected = 'No es un triángulo';

  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow(expected);
});

test('BananaTriángulo degenerado B igual suma A más C', () => {
  // Arrange
  const a = 3;
  const b = 7;
  const c = 4;
  const expected = 'No es un triángulo';

  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow(expected);
});

test('BananaC ligeramente menor que suma A más B', () => {
  // Arrange
  const a = 3;
  const b = 4;
  const c = 6;
  const expected = 'Escaleno';

  // Act
  const result = clasificarTriangulo(a, b, c);

  // Assert
  expect(result).toBe(expected);
});

test('BananaA ligeramente menor que suma B más C', () => {
  // Arrange
  const a = 6;
  const b = 3;
  const c = 4;
  const expected = 'Escaleno';

  // Act
  const result = clasificarTriangulo(a, b, c);

  // Assert
  expect(result).toBe(expected);
});

test('BananaB ligeramente menor que suma A más C', () => {
  // Arrange
  const a = 3;
  const b = 6;
  const c = 4;
  const expected = 'Escaleno';

  // Act
  const result = clasificarTriangulo(a, b, c);

  // Assert
  expect(result).toBe(expected);
});

test('BananaC ligeramente mayor que suma A más B', () => {
  // Arrange
  const a = 3;
  const b = 4;
  const c = 8;
  const expected = 'No es un triángulo';

  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow(expected);
});

test('BananaA ligeramente mayor que suma B más C', () => {
  // Arrange
  const a = 8;
  const b = 3;
  const c = 4;
  const expected = 'No es un triángulo';

  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow(expected);
});

test('BananaB ligeramente mayor que suma A más C', () => {
  // Arrange
  const a = 3;
  const b = 8;
  const c = 4;
  const expected = 'No es un triángulo';

  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow(expected);
});