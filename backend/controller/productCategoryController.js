const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const productCategoryController = {
  // GET
  getAllProductCategory: async (req, res) => {
    const productCategory = await prisma.Product_category.findMany();
    res.status(200).json({ productCategory });
  },

  getProductCategoryByID: async (req, res) => {
    try {
      const { id } = req.params;
      const productCategory = await prisma.Product_category.findUnique({
        where: { category_id: Number(id) },
      });
      res.status(200).json({ productCategory });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Product Category not found" });
    }
  },

  // Method POST
  createProductCategory: async (req, res) => {
    try {
      const { category_name, description } = req.body;
      const productCategory = await prisma.Product_category.create({
        data: {
          category_name,
          description,
        },
      });
      res.status(201).json({ message: "Created Product Category Successfully", productCategory });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Error to Create Product Category" });
    }
  },

  // Method PUT
  updateProductCategory: async (req, res) => {
    try {
      const { category_name, description } = req.body;
      const { id } = req.params;
      const productCategory = await prisma.Product_category.update({
        where: { category_id: Number(id) },
        data: {
          category_name,
          description,
        },
      });
      res.status(200).json({ message: "Product Category Successfully Updated", productCategory });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Product Category Update Error" });
    }
  },

  // Method DELETE
  deleteProductCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const productCategory = await prisma.Product_category.delete({
        where: { category_id: Number(id) },
      });
      res.status(200).json({ message: "Delete Successful", productCategory });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Product Category Delete Error" });
    }
  },
};

module.exports = productCategoryController;
