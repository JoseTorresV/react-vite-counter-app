import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroById debe retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);
    // console.log(hero);

    expect(id).toEqual(expect.any(Number));
    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroById debe retornar un undefined", () => {
    // Paso 100 porque se que 100 no existe
    const id = 100;
    const hero = getHeroeById(id);

    // expect(hero).toBe(undefined) // esta tambien es una opcion
    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const dcHeroes = getHeroesByOwner(owner);
    console.log(dcHeroes);

    expect(dcHeroes.length).toBe(3);
    // Modo real para hacer
    expect(dcHeroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
  });

  test("getHeroesByOwner debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const marvel = getHeroesByOwner(owner);
    console.log(marvel);

    expect(marvel.length).toBe(2);
    // Modo flexible pero es preferible la anterior
    expect(marvel).toEqual([
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },
      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ]);
  });
});
