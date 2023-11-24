const app = require('../app')
const request = require('supertest')

describe('Product Category Test', () => {
    
    //test post method
    test('create product category test', (done) => {
        const newCategoryProduct = {
            category_name: "Test Baby Lab",
            description: "This is just a test bro chill",
        }

        request(app)
            .post('/product-category/create')
            .send(newCategoryProduct)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Created Product Category Successfully')
                expect(response.status).toBe(201)
                done()
            })
            .catch(done)
    })

    //tambahkan test baru dibawah ini
    
    //diatas ini

})