const app = require('../app')
const request = require('supertest')

describe('Warehouse Test', () => {
    
    //test post method
    test('create warehouse test', (done) => {
        const newWarehouse = {
            warehouse_name: "Gudang Test",
            warehouse_category_id: 1,
            location: "Jalan Test",
        }

        request(app)
            .post('/warehouse/create')
            .send(newWarehouse)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Create Warehouse Successful')
                expect(response.status).toBe(201)
                done()
            })
            .catch(done)
    })

    //tambahkan test baru dibawah ini
    
    //diatas ini

})