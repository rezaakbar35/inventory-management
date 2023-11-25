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
                expect(response.body.message).toBe('Create Warehouse Category Successfull')
                expect(response.status).toBe(201)
                done()
            })
            .catch(done)
    })

    //tambahkan test baru dibawah ini
    test('find all warehouse category test', (done) => {
        request(app)
        .get('/warehouse-category')
        .expect('Content-Type', /json/)
        .then(response => {
            expect(response.body.message).toBe("Successfully found category warehouse")
            expect(response.status).toBe(200)
            done()
        })
        .catch(done)
    })

    test('find by id warehouse category test', (done) => {
        const category_id = 1
        const category_name = 'Pakaian'
        const description = 'gudang ini menyimpan beberapa pakaian yang cocok untuk bayi'

        request(app)
        .get(`/warehouse-category/${category_id}`)
        .expect('Content-Type', /json/)
        .then(response => {
            expect(response.body.message).toBe('Successfully found Category Warehouse')
            expect(response.status).toBe(200)
            expect(response.body.warehouseCategory.category_id).toBe(category_id)
            expect(response.body.warehouseCategory.category_name).toBe(category_name)
            expect(response.body.warehouseCategory.description).toBe(description)
            done()
        })
        .catch(done)
    })

    test('update warehouse category test', (done) => {
        const category_id = 6
        const updateWarehouseCategory = {
            category_name: "di gudang sini",
            description: "gudang nya cuman buat test ya bro"
        }

        request(app)
        .put(`/warehouse-category/${category_id}/update`)
        .send(updateWarehouseCategory)
        .expect('Content-Type', /json/)
        .then(response => {
            expect(response.body.message).toBe('Update Warehouse Category Successfull')
            expect(response.status).toBe(200)
            expect(response.body.warehouseCategory.category_name).toBe(updateWarehouseCategory.category_name)
            expect(response.body.warehouseCategory.description).toBe(updateWarehouseCategory.description)
            done()
        })
        .catch(done)
    })

    test('delete warehouse category test', (done) => {
        const category_id = 13

        request(app)
        .delete(`/warehouse-category/${category_id}`)
        .expect('Content-Type', /json/)
        .then(response => {
            expect(response.body.message).toBe('Delete Successfull')
            expect(response.status).toBe(200)
            done()
        })
        .catch(done)
    })
    //diatas ini

})