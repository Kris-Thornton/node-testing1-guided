// Test away!
const Car = require('./car')




function foo () {
    return 'the foo'
}


describe('our first tests', () => {
    test('sanity', () => {
        expect(5).toBe(5),
        expect(5).toBeLessThan(6)
    })
    test('objects', () => {
        const o = { a: 1 }
        const oo = { a: 1 }
        const ooo = oo
        expect(o).toBe(o)
        expect(oo).toBe(ooo)
    })
    test('objects again', () => {
        expect({ a: 1 }).toEqual({ a: 1 })
    })

})

describe('foo function', () => {
    test('foo returns the foo', () => {
        expect(foo()).toBe('the foo')
        expect(foo()).toBe('the foo')
    })
})

describe('Car class', () => {
    test('it is defined', () => {
        expect(Car).toBeDefined()
        expect(Car).toBeInstanceOf(Function)
    })
    test('has model and make', () => {
        const prius = new Car('toyoto', 'prius')
        expect(prius).toHaveProperty('make')
        expect(prius).toHaveProperty('model')
    })
})