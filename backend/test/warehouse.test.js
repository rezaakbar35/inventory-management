const app = require('../app')
const request = require('supertest')

describe('Warehouse Test', () => {
    
 //get methode
    test('read warehouse test', (done) => {
    const getAllWarehouse = {
        warehouse_name: "Gudang AN",
        warehouse_category_id: 2,
        location: "Jalan jalan",

        warehouse_name: "Gudang A",
        warehouse_category_id: 2,
        location: "Jalan Nangka",

        warehouse_name: "Gudang B",
        warehouse_category_id: 3,
        location: "Jalan Kagoshima",

        warehouse_name: "Gudang c",
        warehouse_category_id: 4,
        location: "Jalan in aja dl brok",

        warehouse_name: "Gudang EE",
        warehouse_category_id: 5,
        location: "Jalan jalan jalan jalan jalan jalan",

    }

    request(app)
        .get('/warehouse')
        .send(getAllWarehouse)
        .expect('Content-Type', /json/)
        .then(response => {
            expect(response.status).toBe(200)
            done()
        })
        .catch(done)
 })

 //get by id methode
    test('read by id warehouse test', (done) => {
    const getByIdWarehouse = {
            warehouse_name: "Gudang AN",
            location: "Jalan jalan",
            warehouse_category_id: 2,
        }
        request(app)
            .get('/warehouse/1')
            .send(getByIdWarehouse)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.status).toBe(200)
                done()
            })
            .catch(done)
    })

    //test post method
    test('create warehouse test', (done) => {
        const newWarehouse = {
            warehouse_name: "Gudang test all",
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
   
    //put methode
    test('update warehouse test', (done) => {
        const updateWarehouse = {
            warehouse_name: "Gudang EE",
            location: "Jalan jalan",
            warehouse_category_id: 2,
        }
        request(app)
            .put('/warehouse/5/update')
            .send(updateWarehouse)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Update Warehouse Successful')
                expect(response.status).toBe(200)
                done()
            })
            .catch(done)
    })
    //delete methode
    test('delete warehouse test', (done) => {
            const warehouseID = 6
            const deleteWarehouse = {
                warehouse_name: "Gudang test all",
                warehouse_category_id: 1,
                location: "Jalan Test",
            }
            request(app)
                .delete(`/warehouse/${warehouseID}`)
                .send(deleteWarehouse)
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