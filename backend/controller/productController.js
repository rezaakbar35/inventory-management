const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const path = require('path');

const productController = {
//CREATE
createProduct: async (req, res) => {
    try {
        const { product_code, product_name,product_stock, 
        warehouse_id, product_status, category_name, warehouse_name } = req.body;

        const product_category= await prisma.product_category.findUnique({
          where :{
            category_name: category_name,
          }
        })
        if (!product_category) {
          return res.status(404).json({message: "Category Name Undefined" })
        }
        const warehouse= await prisma.warehouse.findUnique({
          where :{
            warehouse_name: warehouse_name,
          }
        })
        if (!warehouse) {
          return res.status(404).json({message: "Warehouse Name Undefined" })
        }
        const product_image = req.file ? req.file.path : 'default_path_if_file_not_present';
        const product = await prisma.product.create({
        data: {
            product_code: parseInt(product_code),
            product_name,
            product_stock: parseInt(product_stock),
            category_id : product_category.category_id,
            warehouse_id: warehouse.warehouse_id,
            product_image: product_image,
            product_status,
            arrival_at: new Date(),

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
    const product = await prisma.product.findMany({
      include: {
        product_category: {
          select:{
          category_name: true,
          }
        },
        warehouse: {
          select:{
          warehouse_name: true
          }
        }
      }
    });
    res.status(200).json({ message: "Product successfully read", product });
    },

//READ PRODUCT BY ID
getByIdProduct: async (req, res) => {
    try{
        const { id } = req.params;
        const product = await prisma.product.findUnique({
          where: { product_id: Number(id) },
          include: {
            product_category: {
              select:{
              category_name: true,
              }
            },
            warehouse: {
              select:{
              warehouse_name: true
              }
            }
          }
        });
        res.status(200).json({ message: "Sucessfully found the product" , product });
      }
      catch (err) {
        console.log("Error while reading product" , err);
        res.status(400).json({ message: "Product not found"})
      }
},

//READ PRODUCT BY WAREHOUSE NAME
getByWarehouseProduct: async (req, res) => {
  try{
      const { warehouse_name } = req.params;
      const warehouse = await prisma.warehouse.findUnique({
        where: { warehouse_name: warehouse_name}
      })

      const product = await prisma.product.findMany({
        where: { warehouse_id: warehouse.warehouse_id },
        include: {
          product_category: {
            select:{
            category_name: true,
            }
          },
          warehouse: {
            select:{
            warehouse_name: true
            }
          }
        }
      });
      res.status(200).json({ message: "Sucessfully found the product" , product });
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
        const {  product_code, product_name, product_stock, 
           product_status, category_name, warehouse_name} = req.body;
        const product_category = await prisma.product_category.findUnique({
          where :{
            category_name: category_name,
          }
        })
        if (!product_category) {
          return res.status(404).json({message: "Category Name Undefined" })
        }
        const warehouse= await prisma.warehouse.findUnique({
          where :{
            warehouse_name: warehouse_name,
          }
        })
        if (!warehouse) {
          return res.status(404).json({message: "Warehouse Name Undefined" })
        }
        const product_image = req.file ? req.file.path : 'default_path_if_file_not_present';
        const product = await prisma.product.update({
          where: { product_id: Number(id) },
          data: {
            product_code: parseInt(product_code),
            product_name,
            product_stock: parseInt(product_stock),
            category_id : product_category.category_id,
            warehouse_id: warehouse.warehouse_id,
            product_image,
            product_status,
            arrival_at: new Date(),
          },
        });
        res.status(200).json( { message: "Product updated successfully", product });
      }
      catch (err){
        console.log("Error while adding product", err)
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
        res.json({ message:"Delete Successful", product });
      } 
      catch (err) {
        console.log("Error while deleting product" , err);
        res.status(400).json({ message: "Delete Successfull" })
      }
},
};

module.exports = productController;
       
      

  


