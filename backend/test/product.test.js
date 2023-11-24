const app = require('../app')
const request = require('supertest')
const path = require('path');

describe('Product Test', () => {
    
    //test post method
    // test('product create test', (done) => {
    //     const newProduct = {
    //         product_code: 2001,
    //         product_name: "Baby Doll",
    //         category_id: 1,
    //         product_stock: 1,
    //         warehouse_id: 1,
    //         product_image: "/uploads/img.jpg",
    //         product_status: "di gudang",
    //         arrival_at: new Date(),
    //     }

    //     request(app)
    //         .post('/product/create')
    //         .field('complex_object', '{product_code: 2001, product_name: "Baby Doll", category_id: 1, product_stock: 1, warehouse_id: 1, product_status: "di gudang",}', {contentType: 'application/json'})
    //         .attach('product_image', '"C:\Users\LENOVO\Downloads\aaaa.jpg"')
    //         .expect('Content-Type', /json/)
    //         .then(response => {
    //             expect(response.body.message).toBe('Succesfully Create New Product!')
    //             expect(response.status).toBe(201)
    //             done()
    //         })
    //         .catch(done)
    // })

    //tambahkan test baru dibawah ini

    //diatas ini

})