const app = require('../app')
const request = require('supertest')

describe('Product Category Test', () => {
    
    // Test POST method - create product category
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

    // Test GET method - get all product categories
    test('get all product categories test', (done) => {
        request(app)
            .get('/product-category')
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.status).toBe(200)
                expect(response.body.productCategory).toBeDefined()
                
                done()
            })
            .catch(done)
    })

    // Test GET method - get product category by ID
    test('get product category by ID test', (done) => {
        const categoryId = 1; 

        request(app)
            .get(`/product-category/${categoryId}`)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.status).toBe(200)
                expect(response.body.productCategory).toBeDefined()
                
                done()
            })
            .catch(done)
    })

    // Test PUT method - update product category
    test('update product category test', (done) => {
        const categoryId = 1; 
        const updatedCategoryData = {
            category_name: "Updated Test Category",
            description: "This category has been updated",
        }

        request(app)
            .put(`/product-category/${categoryId}/update`)
            .send(updatedCategoryData)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.status).toBe(200)
                expect(response.body.message).toBe('Product Category Successfully Updated')
                
                done()
            })
            .catch(done)
    })

    // Test DELETE method - delete product category
    test('delete product category test', (done) => {
        const categoryId = 1; 

        request(app)
            .delete(`/product-category/${categoryId}`)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.status).toBe(200)
                expect(response.body.message).toBe('Delete Successful')
                
                done()
            })
            .catch(done)
    })
})
