const app = require("../app");
const request = require("supertest");

describe("Product Shipping Test", () => {
  //test post method
  test("create product shipping test", (done) => {
    const newProductShipping = {
      product_id: 2,
      buyer_id: 1,
      warehouse_id: 3,
      quantity: 1,
      tracking_number: "SAID8F7HSD7F",
      target_address: "St. Test",
      product_shipment_status: "dijalan",
      username: "admin",
      product_code: 1001,
      warehouse_name: "Gudang Garam"

    };

    request(app)
      .post("/product-shipping/create")
      .send(newProductShipping)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.body.message).toBe("Product Shipped successfully");
        expect(response.status).toBe(201);
        done();
      })
      .catch(done);
  });

  //tambahkan test baru dibawah ini

  // Test GET method
  test("retrieve all product shippings test", (done) => {
    request(app)
      .get("/product-shipping")
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Product Get successfully");
        done();
      })
      .catch(done);
  });

  // Test PUT method
  test("update product shipping test", (done) => {
    const productShippingID = 1
    const updatedProductShipping = {
      product_id: 1,
      buyer_id: 1,
      warehouse_id: 1,
      quantity: 1,
      tracking_number: "Updated SAID8F7HSD7F",
      target_address: "Updated St. Test",
      product_shipment_status: "update sudah sampai",
      username: "admin",
      product_code: 1001,
      warehouse_name: "Gudang Garam"
    };

    request(app)
      .put(`/product-shipping/${productShippingID}/update`)
      .send(updatedProductShipping)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Product Updated successfully");
        done();
      })
      .catch(done);
  });

  // Test GET by ID method
  test("retrieve product shipping by ID test", (done) => {
    request(app)
      .get("/product-shipping/1")
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Product Get By Id successfully");
        done();
      })
      .catch(done);
  });

//test get Product-shipping by username
  test("retrieve all product shippings test by user", (done) => {
    const username = {
      username: "beaknih"
    }
    request(app)
      .get("/product-shipping/users/:username")
      .send(username)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Product Get By Username successfully");
        done();
      })
      .catch(done);
  });
//Get Product-shipping By Warehouse_Name
  test("retrieve all product shippings test by warehouse", (done) => {
    const warehouse_name = {
      warehouse_name: "Gudang Garam"
    }
    request(app)
    .get(`/product-shipping/warehouse/${warehouse_name.warehouse_name}`)
      .send(warehouse_name)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Product Get By Id successfully");
        done();
      })
      .catch(done);
  });

  // Test DELETE method
  test("delete product shipping test", (done) => {
    const productShippingID = 2

    request(app)
      .delete(`/product-shipping/${productShippingID}`)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Product Deleted successfully");
        done();
      })
      .catch(done);
  });


});
