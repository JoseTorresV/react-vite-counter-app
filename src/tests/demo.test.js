// Esto sirve para agrupar nuestros tests
describe("Pruebas en <DemoComponent />", () => {
  test("esta prueba no debe fallar", () => {
    // 1. Inicializacion
    const message1 = "hola mundo";
    // 2. estimulo
    const message2 = message1.trim();

    // 3. Observar el comportamiento esperado
    expect(message1).toBe(message2);
  });
});
