const app = require('../app')
const request = require('supertest')
const path = require('path');

describe('Product Test', () => {
    
    // test post method
    test('product create and image upload test', (done) => {
        const imagePath = path.resolve(__dirname, 'C:/Users/LENOVO/Downloads/aaaa.jpg');

        const newProduct = {
            product_code: 2001345,
            product_name: 'Dot',
            category_name: 'Clothes Alva',
            product_stock: 1,
            warehouse_name: 'Gudang C',
            product_status: 'di gudang',
        };

        request(app)
            .post('/product/create')
            .field('product_code', String(newProduct.product_code))
            .field('product_name', newProduct.product_name)
            .field('category_name', newProduct.category_name)
            .field('product_stock', String(newProduct.product_stock))
            .field('warehouse_name', newProduct.warehouse_name)
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
        const product_id = 3;
        const product_code = 1003;
        const product_name = 'Baby socks';
        const category_id = 3;
        const product_stock = 3;
        const warehouse_id = 3;
        const product_status = 'Sudah sampai';


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

    // getProductByWarehouse test
    test('find product by warehouse test', (done) => {
        const warehouse_name = "Gudang C";
        const product_code = 1004;
        const product_name = 'Baby socks';
        const category_id = 4;
        const product_stock = 4;
        const warehouse_id = 4;
        const product_status = 'Sudah sampai';


        request(app)
            .get(`/product/warehouse/${warehouse_name}`)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Sucessfully found the product');
                expect(response.body.product[0].product_code).toBe(product_code);
                expect(response.body.product[0].product_name).toBe(product_name);
                expect(response.body.product[0].category_id).toBe(category_id);
                expect(response.body.product[0].product_stock).toBe(product_stock);
                expect(response.body.product[0].warehouse_id).toBe(warehouse_id);
                expect(response.body.product[0].product_status).toBe(product_status);
                done();
            })
            .catch(done)
    })

    // test updateProductById method
    test('update product test', (done) => {
        const product_id = 3;
        const updatedWarehouse_id = 1;
        const updatedCategory_id = 4
        const updateProduct = {
            product_code: 1003,
            product_name: "Aswawawu",
            category_name: "Clothes Teta",
            product_stock: "1",
            warehouse_name: "Gudang Garam",
            product_status: "di jalan",
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
                expect(response.body.product.category_id).toBe(updatedCategory_id);
                expect(response.body.product.product_stock).toBe(parseInt(updateProduct.product_stock));
                expect(response.body.product.warehouse_id).toBe(updatedWarehouse_id);
                expect(response.body.product.product_status).toBe(updateProduct.product_status);
                done();
            })
            .catch(err => {
                done(err)});
    });



    //deleteProduct test
    test('delete product test', (done) => {
        const product_id = 5;

        request(app)
            .delete(`/product/${product_id}`)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Delete Successful')
                expect(response.status).toBe(200)
                done()
            })
            .catch(done)
    })

    
})