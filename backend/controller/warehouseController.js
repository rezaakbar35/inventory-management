const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const warehouseController = {
  // Method GET
  getAllWarehouse: async (req, res) => {
    const warehouse = await prisma.warehouse.findMany({
      include: {
        warehouse_category: {
            select: {
                category_name: true
            }
          }
        }
    });
    res.status(200).json({ warehouse });
  },

  getByIdWarehouse: async (req, res) => {
    try {
      const { id } = req.params;
      const warehouse = await prisma.warehouse.findUnique({
        where: { warehouse_id: Number(id) },
        include: {
            warehouse_category: {
                select: {
                    category_name: true
                }
            }
        }
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
      const { warehouse_name, location, category_name } = req.body;

      // Find the category_name based on warehouse_category
      const warehouse_category = await prisma.warehouse_category.findUnique({
        where: {
          category_name: category_name
        }
      });
  
      if (!warehouse_category) {
        // Handle the case where the warehouse_category is not found
        return res.status(404).json({ message: "warehouse category not found" });
      }

       // Cek apakah gudang dengan nama yang sama sudah ada
      const existingWarehouse = await prisma.warehouse.findUnique({
      where: {
        warehouse_name: warehouse_name,
      },
    });

    if (existingWarehouse) {
      // Tangani kasus ketika gudang sudah ada
      return res.status(400).json({ message: "Warehouse with the same name already exists" });
    }

      const warehouse = await prisma.warehouse.create({
        data: {
          warehouse_name,
          location,
          warehouse_category_id: warehouse_category.category_id,
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
      const { warehouse_name, location, category_name } = req.body;

      // Find the category_name based on warehouse
      const warehouse_category = await prisma.warehouse_category.findUnique({
        where: {
          category_name: category_name
        },
      });
  
      if (!warehouse_category) {
        // Handle the case where the warehouse_category is not found
        return res.status(404).json({ message: "Warehouse category not found" });
      }

      const warehouse = await prisma.warehouse.update({
        where: { warehouse_id: Number(id) },
        data: {
          warehouse_name,
          location,
          warehouse_category_id: warehouse_category.category_id,
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
      const Warehouse = await prisma.Warehouse.delete({
        where: { warehouse_id: Number(id) },
      });
      res.status(200).json({ message: "Delete Successful", Warehouse });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Error to Delete  Warehouse" });
    }
  },
};

module.exports = warehouseController;
