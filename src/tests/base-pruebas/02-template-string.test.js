import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Pruebas en el template string", () => {
  test('getsaludo debe retornar "Hola Fernando"', () => {
    const name = "Jose";
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}!!!`);
  });
});
