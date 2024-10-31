import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas en 09-promesas", () => {
  // done serves to notify the method that the operation is finished. The name done could change but this name is generally used
  test("getHeroeByIdAsync debe retornar un heroe", (done) => {
    const idHeroe = 1;
    getHeroeByIdAsync(idHeroe).then((hero) => {
      console.log(hero);
      expect(hero).toBe(heroes.find(({ id }) => id === idHeroe));

      done();
    });
  });

  test("getHeroeByIdAsync debe obtener un error si heroe no existe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then((hero) => {
        console.log('qua', hero);
        expect(hero).toBeFalsy();

        done();
      })
      .catch((error) => {
        expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
        done();
      });
  });

});
