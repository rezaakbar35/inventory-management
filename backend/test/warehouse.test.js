const app = require('../app')
const request = require('supertest')

describe('Warehouse Test', () => {
    
 //get methode
    test('get all warehouse test', (done) => {
    request(app)
        .get('/warehouse')
        .expect('Content-Type', /json/)
        .then(response => {
            expect(response.status).toBe(200)
            done()
        })
        .catch(done)
 })

 //get by id methode
    test('get by id warehouse test', (done) => {
        const warehouse_id = 1
        const warehouse_name = "Gudang Garam"
        const location = "Jalan nya sama aku jadian sama yg lain"
        const warehouse_category_id = 1
        const category_name = "Pakaian"
        
        request(app)
            .get(`/warehouse/${warehouse_id}`)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.status).toBe(200)
                expect(response.body.warehouse.warehouse_name).toBe(warehouse_name)
                expect(response.body.warehouse.location).toBe(location)
                expect(response.body.warehouse.warehouse_category_id).toBe(warehouse_category_id)
                expect(response.body.warehouse.warehouse_category.category_name).toBe(category_name)
                done()
            })
            .catch(done)
    })

    //test post method
    test('create warehouse test', (done) => {
        const newWarehouse = {
            warehouse_name: "Gudang test all",
            location: "Jalan Test",
            category_name: "Pakaian" ,
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
   
    //put methode
    test('update warehouse test', (done) => {
        const warehouse_id = 5
        const warehouse_category_id = 5
        const updateWarehouse = {
            warehouse_name: "Gudang Coy",
            location: "Jalan Sana Aja",
            category_name: "Gadget",
        }
        request(app)
            .put(`/warehouse/${warehouse_id}/update`)
            .send(updateWarehouse)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Update Warehouse Successful')
                expect(response.status).toBe(200)
                expect(response.body.warehouse.warehouse_name).toBe(updateWarehouse.warehouse_name)
                expect(response.body.warehouse.location).toBe(updateWarehouse.location)
                expect(response.body.warehouse.warehouse_category_id).toBe(warehouse_category_id)
                done()
            })
            .catch(done)
    })
    //delete methode
    test('delete warehouse test', (done) => {
            const warehouse_id = 6
            request(app)
                .delete(`/warehouse/${warehouse_id}`)
                .expect('Content-Type', /json/)
                .then(response => {
                    expect(response.body.message).toBe('Delete Successful')
                    expect(response.status).toBe(200)
                    done()
                })
                .catch(done)
        })
    //tambahkan test baru dibawah ini
    //diatas ini
})