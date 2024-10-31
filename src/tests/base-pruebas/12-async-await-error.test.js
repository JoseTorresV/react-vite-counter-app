import { getImagenFromAPI } from "../../base-pruebas/12-async-await-error";

describe('Pruebas en 11-async-await.js error', () => { 
    
    test('getImage debe retornar un error si no se encuentra el API', async () => {
    
        const resp = await getImagenFromAPI();

        expect(typeof resp).toBe('string');
        // this is anopther way to do this test
        // expect(resp).toEqual(expect.any(String));
        // this could bve done using trycatch but we did it in the next lessons
        expect( resp ).toBe('No se encontro la imagen')
    
     })

 })

