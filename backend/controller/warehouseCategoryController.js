const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const warehouseCategoryController = {
  // Method GET
  getAllWarehouseCategory: async (req, res) => {
    const warehouseCategory = await prisma.warehouse_category.findMany();
    res.status(200).json({ message: "Successfully found category warehouse", warehouseCategory });
  },

  getByIdWarehouseCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const warehouseCategory = await prisma.warehouse_category.findUnique({
        where: { category_id: Number(id) },
      });
      res.status(200).json({ message: "Successfully found Category Warehouse", warehouseCategory });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Category Warehouse not found" });
    }
  },

  // Method POST
  createWarehouseCategory: async (req, res) => {
    try {
      const { category_name, description } = req.body;
      const warehouseCategory = await prisma.warehouse_category.create({
        data: {
          category_name,
          description,
        },
      });
      res.status(201).json({ message: "Create Warehouse Category Successfull", warehouseCategory });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Error to Create Category Warehouse" });
    }
  },

  // Method PUT
  updateWarehouseCategory: async (req, res) => {
    try {
      const { category_name, description } = req.body;
      const { id } = req.params;
      const warehouseCategory = await prisma.warehouse_category.update({
        where: { category_id: Number(id) },
        data: {
          category_name,
          description,
        },
      });
      res.status(200).json({ message: "Update Warehouse Category Successfull", warehouseCategory });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Error to Update Category Warehouse" });
    }
  },

  // Method DELETE
  deleteWarehouseCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const warehouseCategory = await prisma.warehouse_category.delete({
        where: { category_id: Number(id) },
      });
      res.status(200).json({ message: "Delete Successfull", warehouseCategory });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Error to Delete Category Warehouse" });
    }
  },
};

module.exports = warehouseCategoryController;
