const app = require('../app')
const request = require('supertest')
const path = require('path');

describe('Product Test', () => {
    
    // test post method
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

    // test getAll method
    test('find all product test', (done) => {
        request(app)
            .get('/product')
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Product successfully read')
                expect(response.status).toBe(200)
                done()
            })
            .catch(done)
    })

    // getProductById test
    test('find product by id test', (done) => {
        const product_id = 1;
        const product_code = 2002;
        const product_name = 'Baby Doll';
        const category_id = 1;
        const product_stock = 1;
        const warehouse_id = 1;
        const product_status = 'di gudang';


        request(app)
            .get(`/product/${product_id}`)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Sucessfully found the product');
                expect(response.body.product.product_id).toBe(product_id);
                expect(response.body.product.product_code).toBe(product_code);
                expect(response.body.product.product_name).toBe(product_name);
                expect(response.body.product.category_id).toBe(category_id);
                expect(response.body.product.product_stock).toBe(product_stock);
                expect(response.body.product.warehouse_id).toBe(warehouse_id);
                expect(response.body.product.product_status).toBe(product_status);
                done();
            })
            .catch(done)
    })

    // test updateProductById method
    test('update product test', (done) => {
        const product_id = 1;
        const updateProduct = {
            product_code: "2002",
            product_name: "Baby Doll",
            category_id: "1",
            product_stock: "1",
            warehouse_id: "1",
            product_status: "di gudang",
        };
    
        request(app)
            .put(`/product/${product_id}/update`)
            .send(updateProduct)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe('Product updated successfully');
                expect(response.body.product.product_id).toBe(product_id);
                expect(response.body.product.product_code).toBe(updateProduct.product_code);
                expect(response.body.product.product_name).toBe(updateProduct.product_name);
                expect(response.body.product.category_id).toBe(parseInt(updateProduct.category_id));
                expect(response.body.product.product_stock).toBe(parseInt(updateProduct.product_stock));
                expect(response.body.product.warehouse_id).toBe(parseInt(updateProduct.warehouse_id));
                expect(response.body.product.product_status).toBe(updateProduct.product_status);
                done();
            })
            .catch(err => done(err));
    });



    //deleteProduct test
    test('delete product test', (done) => {
        const product_id = 1;

        request(app)
            .delete(`/product/${product_id}`)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Delete Successfull')
                expect(response.status).toBe(400)
                done()
            })
            .catch(done)
    })

    
})