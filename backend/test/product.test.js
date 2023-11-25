const app = require('../app');
const request = require('supertest');
const path = require('path');

describe('Product Test', () => {
    
    // Test the combined product creation and image upload
    test('product create and image upload test', (done) => {
        const imagePath = path.resolve(__dirname, 'C:/Users/LENOVO/Downloads/aaaa.jpg');

        const newProduct = {
            product_code: 2001,
            product_name: 'Baby Doll',
            category_id: 1,
            product_stock: 1,
            warehouse_id: 1,
            product_status: 'di gudang',
        };

        request(app)
            .post('/product/create')
            .field('product_code', String(newProduct.product_code))
            .field('product_name', newProduct.product_name)
            .field('category_id', String(newProduct.category_id))
            .field('product_stock', String(newProduct.product_stock))
            .field('warehouse_id', String(newProduct.warehouse_id))
            .field('product_status', newProduct.product_status)
            .attach('product_image', imagePath)
            .expect('Content-Type', /json/)
            .expect(201)
            .timeout(60000)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(res.body.message).toBe('Succesfully Create New Product!');
                done();
            });
    });

    // Add new tests below this comment

    // Above this comment
});