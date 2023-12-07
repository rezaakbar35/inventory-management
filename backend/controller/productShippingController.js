const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createProductShipping(req, res) {
  try {
    const {
      product_code,
      username,
      warehouse_name,
      quantity,
      tracking_number,
      product_shipment_status,
    } = req.body;

    const buyer = await prisma.user.findUnique({
      where:{
        username: username,
      }
    })

    const product = await prisma.product.findUnique({
      where:{
        product_code: product_code,
      }
    })

    const warehouse = await prisma.warehouse.findUnique({
      where:{
        warehouse_name: warehouse_name,
      }
    })

    if (!product || !buyer || !warehouse || !quantity) {
      return res.status(400).json({ error: "Invalid input data" });
    }

    const newShipping = await prisma.product_shipping.create({
      data: {
        product_id: product.product_id,
        buyer_id: buyer.user_id,
        warehouse_id: warehouse.warehouse_id,
        quantity: parseInt(quantity),
        tracking_number,
        product_shipment_status,
      },
    });
    const removeStock = await prisma.product.update({
      where: { product_id: product.product_id },
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
    product_code,
    username,
    warehouse_name,
    tracking_number,
    product_shipment_status,
  } = req.body;

  const buyer = await prisma.user.findUnique({
    where:{
      username: username,
    }
  })

  const product = await prisma.product.findUnique({
    where:{
      product_code: product_code,
    }
  })

  const warehouse = await prisma.warehouse.findUnique({
    where:{
      warehouse_name: warehouse_name,
    }
  })

  try {
    const updatedShipping = await prisma.product_shipping.update({
      where: { shipping_id: shippingId },
      data: {
        product: { connect: { product_id: product.product_id } },
        buyer: { connect: { user_id: buyer.user_id } },
        warehouse: { connect: { warehouse_id: warehouse.warehouse_id } },
        tracking_number,
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
        product: {
          select: {
            product_name: true,
          }
        },
        buyer: {
          select: {
            first_name: true,
            username: true,
            user_address: true,
          }
        },
        warehouse: {
          select: {
            warehouse_name: true,
            location: true,
          }
        },
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
        product: {
          select: {
            product_name: true,
          }
        },
        buyer: {
          select: {
            first_name: true,
            username: true,
            user_address: true,
          }
        },
        warehouse: {
          select: {
            warehouse_name: true,
            location: true,
          }
        },
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

async function getProductShippingByUser(req, res) {
  const {username} = req.body

  const user = await prisma.user.findUnique({
    where: { username: username}
  })

  try {
    const shipping = await prisma.product_shipping.findMany({
      where: { buyer_id: user.user_id },
      include: {
        product: {
          select: {
            product_name: true,
          }
        },
        buyer: {
          select: {
            first_name: true,
            username: true,
            user_address: true,
          }
        },
        warehouse: {
          select: {
            warehouse_name: true,
            location: true,
          }
        },
      },
    });

    res
      .status(200)
      .json({ message: "Product Get By Username successfully", shipping });
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
  getProductShippingByUser,
};
