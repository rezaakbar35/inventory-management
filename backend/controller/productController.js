const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const path = require('path');

const productController = {
//CREATE
createProduct: async (req, res) => {
    try {
        const { product_code, product_name, category_id,product_stock, 
        warehouse_id, product_status } = req.body;
        const product = await prisma.product.create({
            data: {
              product_code: parseInt(product_code),
              product_name,
              category_id: parseInt(category_id),
              product_stock: parseInt(product_stock),
              warehouse_id: parseInt(warehouse_id),
              product_image: req.file.path,
              product_status,
              arrival_at: new Date()
            },
          });
          res.status(201).json({ message: "Succesfully Create New Product!", product })
         }catch (err) {
            console.log("Error while adding product", err);
            res.status(400).json({ message: "Failed to add product"});
        }
    },

//READ ALL PRODUCT
getAllProduct: async (req, res) =>{
    const product = await prisma.product.findMany();
    res.status(200).json({ product });
    },

//READ PRODUCT BY ID
getByIdProduct: async (req, res) => {
    try{
        const { id } = req.params;
        const product = await prisma.product.findUnique({
          where: { product_id: Number(id) },
        });
        res.status(200).json({ product });
      }
      catch (err) {
        console.log("Error while reading product" , err);
        res.status(400).json({ message: "Product not found"})
      }
},

//UPDATE
updateProduct: async (req, res) => {
    try{
        const { id } = req.params;
        const { product_code, product_name, category_id, product_stock, 
          warehouse_id, product_status, arrival_at } = req.body;
        if (req.file){
        const product = await prisma.product.update({
          where: { product_id: Number(id) },
          data: {
            product_code: parseInt(product_code),
            product_name,
            category_id: parseInt(category_id),
            product_stock: parseInt(product_stock),
            warehouse_id: parseInt(warehouse_id),
            product_image: req.file.path,
            product_status,
            arrival_at: new Date()
          },
        });
        res.status(200).json( { product });
      } else {
        const product = await prisma.product.update({
          where: { product_id: Number(id) },
          data: {
            product_code: parseInt(product_code),
            product_name,
            category_id: parseInt(category_id),
            product_stock: parseInt(product_stock),
            warehouse_id: parseInt(warehouse_id),
            product_status,
            arrival_at: new Date()
          },
        });
        res.json({ product });
      }
      }
      catch (err){
        console.log("Error while updating product", err);
        res.status(400).json({ message: "Something went wrong" })
      }
},

//DELETE
deleteProduct: async (req, res) => {
    try{
        const { id } = req.params;
        const product = await prisma.product.delete({
          where: { product_id: Number(id) },
        });
        res.json({ message:"Deleted successfully" });
      } 
      catch (err) {
        console.log("Error while deleting product" , err);
        res.status(400).json({ message: "Something went wrong" })
      }
},
};

module.exports = productController;
       
      

  


