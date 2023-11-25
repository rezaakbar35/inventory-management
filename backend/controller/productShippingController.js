const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createProductShipping(req, res) {
  try {
    const {
      product_id,
      buyer_id,
      warehouse_id,
      warehouse_name,
      quantity,
      tracking_number,
      target_address,
      product_shipment_status,
    } = req.body;

    if (!product_id || !buyer_id || !warehouse_id || !quantity) {
      return res.status(400).json({ error: "Invalid input data" });
    }

    const newShipping = await prisma.product_shipping.create({
      data: {
        product_id: parseInt(product_id),
        buyer_id: parseInt(buyer_id),
        warehouse_id: parseInt(warehouse_id),
        warehouse_name,
        quantity: parseInt(quantity),
        tracking_number,
        target_address,
        product_shipment_status,
      },
    });
    const removeStock = await prisma.product.update({
      where: { product_id: parseInt(product_id) },
      data: {
        product_stock: {
          decrement: parseInt(quantity),
        },
      },
    });
    res
      .status(201)
      .json({ message: "Product Shipped successfully", newShipping });
  } catch (error) {
    console.error("Failed to create product shipping:", error);
    res
      .status(500)
      .json({ error: "Failed to create product shipping", details: error });
  }
}

async function updateProductShipping(req, res) {
  const shippingId = parseInt(req.params.id);
  const {
    product_id,
    buyer_id,
    warehouse_id,
    warehouse_name,
    tracking_number,
    target_address,
    product_shipment_status,
  } = req.body;

  try {
    const updatedShipping = await prisma.product_shipping.update({
      where: { shipping_id: shippingId },
      data: {
        product: { connect: { product_id: product_id } },
        buyer: { connect: { user_id: buyer_id } },
        warehouse: { connect: { warehouse_id: warehouse_id } },
        warehouse_name,
        tracking_number,
        target_address,
        product_shipment_status,
      },
    });

    res
      .status(200)
      .json({ message: "Product Updated successfully", updatedShipping });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update product shipping", details: error });
  }
}

async function getAllProductShippings(req, res) {
  try {
    const allShippings = await prisma.product_shipping.findMany({
      include: {
        product: true,
        buyer: true,
        warehouse: true,
      },
    });

    res.status(200).json({ message: "Product Get successfully", allShippings });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch product shippings", details: error });
  }
}

async function deleteProductShipping(req, res) {
  const shippingId = parseInt(req.params.id);

  try {
    const deletedShipping = await prisma.product_shipping.delete({
      where: { shipping_id: shippingId },
    });

    res
      .status(200)
      .json({ message: "Product Deleted successfully", deletedShipping });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete product shipping", details: error });
  }
}

async function getProductShippingById(req, res) {
  const shippingId = parseInt(req.params.id);

  try {
    const shipping = await prisma.product_shipping.findUnique({
      where: { shipping_id: shippingId },
      include: {
        product: true,
        buyer: true,
        warehouse: true,
      },
    });

    res
      .status(200)
      .json({ message: "Product Get By Id successfully", shipping });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch product shipping", details: error });
  }
}

module.exports = {
  createProductShipping,
  getAllProductShippings,
  updateProductShipping,
  deleteProductShipping,
  getProductShippingById,
};
