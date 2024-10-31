import { getImagen } from "../../base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', () => { 
    
    test('getImage debe de retornar un URL de la imagen', async () => {
    
        const url = await getImagen();

        expect(typeof url).toBe('string');
        // this is anopther way to do this test
        expect(url).toEqual(expect.any(String));
    
     })

 })

