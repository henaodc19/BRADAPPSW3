function sumarType(a,b){
    return a+b;
}


describe('calculos matematicos',() =>{
    test('prueba de sumas', () =>{
        
        expect(sumarType(1,1)).toBe(3);
    })
});