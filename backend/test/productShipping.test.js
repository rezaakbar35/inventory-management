const app = require('../app')
const request = require('supertest')

describe('Product Shipping Test', () => {
    
    //test post method
    test('create product shipping test', (done) => {
        const newProductShipping = {
            product_id: 2,
            buyer_id: 1,
            warehouse_id: 3,
            warehouse_name: "Gudang B",
            quantity: 1,
            tracking_number: "SAID8F7HSD7F",
            target_address: "St. Test",
            product_shipment_status: "dijalan",
        }

        request(app)
            .post('/product-shipping/create')
            .send(newProductShipping)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Product Shipped successfully')
                expect(response.status).toBe(201)
                done()
            })
            .catch(done)
    })

    //tambahkan test baru dibawah ini
    
    //diatas ini

})