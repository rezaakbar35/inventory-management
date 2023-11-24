const app = require('../app')
const request = require('supertest')

describe('Warehouse Category Test', () => {

    //test post method
    test('create warehouse category test', (done) => {
        const newWarehouseCategory = {
            category_name: "Test Weapon",
            description: "gudang ini cuman buat test akwoakwokaw",
        }

        request(app)
            .post('/warehouse-category/create')
            .send(newWarehouseCategory)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Create Warehouse Category Successful')
                expect(response.status).toBe(201)
                done()
            })
            .catch(done)
    })

    //tambahkan test baru dibawah ini
    
    //diatas ini

})