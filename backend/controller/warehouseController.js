const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const warehouseController = {
  // Method GET
  getAllWarehouse: async (req, res) => {
    const warehouse = await prisma.warehouse.findMany();
    res.status(200).json({ warehouse });
  },

  getByIdWarehouse: async (req, res) => {
    try {
      const { id } = req.params;
      const warehouse = await prisma.warehouse.findUnique({
        where: { warehouse_id: Number(id) },
      });
      res.status(200).json({ warehouse });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Warehouse not found" });
    }
  },

  // Method POST
  createWarehouse: async (req, res) => {
    try {
      const { warehouse_name, location, warehouse_category_id } = req.body;
      const warehouse = await prisma.warehouse.create({
        data: {
          warehouse_name,
          location,
          warehouse_category_id: parseInt(warehouse_category_id),
        },
      });
      res.status(201).json({ message: "Create Warehouse Successful", warehouse });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Warehouse already exists" });
    }
  },

  // Method PUT
  updateWarehouse: async (req, res) => {
    try {
      const { id } = req.params;
      const { warehouse_name, location, warehouse_category_id } = req.body;
      const warehouse = await prisma.warehouse.update({
        where: { warehouse_id: Number(id) },
        data: {
          warehouse_name,
          location,
          warehouse_category_id: parseInt(warehouse_category_id),
        },
      });
      res.status(200).json({ message: "Update Warehouse Successful", warehouse });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Update Warehouse Error" });
    }
  },

  // Method Delete
  deleteWarehouse: async (req, res) => {
    try {
      const { id } = req.params;
      const warehouse = await prisma.warehouse.delete({
        where: { warehouse_id: Number(id) },
      });
      res.status(200).json({ message: "Delete Successful", warehouse });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Delete Warehouse Error" });
    }
  },
};

module.exports = warehouseController;
