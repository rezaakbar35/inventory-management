const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seedData = async () => {
  try {
    //Seeding Warehouse Category
    const warehouseCategory = await prisma.warehouse_category.createMany({
      data: [
        {
          category_name: "Pakaian",
          description:
            "gudang ini menyimpan beberapa pakaian yang cocok untuk bayi",
        },
        {
          category_name: "Makanan",
          description:
            "gudang ini menyimpan produk khusus makanan seperti bubur bayi dan biskuit bayi",
        },
        {
          category_name: "Minuman",
          description:
            "gudang ini menyimpan produk khusus minuman seperti minuman energi untuk bayi dan minuman penyegar lainnya",
        },
        {
          category_name: "Mainan",
          description:
            "gudang ini menyimpan beberapa mainan yang cocok untuk bayi seperti PS 5 dan nintendo switch",
        },
        {
          category_name: "Gadget",
          description:
            "gudang ini menyimpan produk teknologi terbaru seperti chip penanam otak pada bayi dan leher anti menangis",
        },
      ],
    });

    //Seeding Warehouse
    const warehouse = await prisma.warehouse.createMany({
      data: [
        {
          warehouse_name: "Gudang Garam",
          warehouse_category_id: 1,
          location: "Jalan nya sama aku jadian sama yg lain",
        },
        {
          warehouse_name: "Gudang A",
          warehouse_category_id: 2,
          location: "Jalan Nangka",
        },
        {
          warehouse_name: "Gudang B",
          warehouse_category_id: 3,
          location: "Jalan Kagoshima",
        },
        {
          warehouse_name: "Gudang C",
          warehouse_category_id: 4,
          location: "Jalan in aja dl brok",
        },
        {
          warehouse_name: "Gudang EE",
          warehouse_category_id: 5,
          location: "Jalan jalan jalan jalan jalan jalan",
        },
      ],
    });

    //Seeding Product Category
    const productCategory = await prisma.product_category.createMany({
      data: [
        {
          category_name: "Clothes Baby",
          description: "Clothes for baby",
        },
        {
          category_name: "Clothes Alva",
          description: "Clothes for baby",
        },
        {
          category_name: "Clothes Beta",
          description: "Clothes for baby",
        },
        {
          category_name: "Clothes Teta",
          description: "Clothes for baby",
        },
        {
          category_name: "Clothes Tita",
          description: "Clothes for baby",
        },
        {
          category_name: "Clothes yey",
          description: "Clothes for baby",
        },
      ],
    });

    // Seeding Product
    const product = await prisma.product.createMany({
      data: [
        {
          product_code: 1001,
          product_name: "Baby socks",
          category_id: 1,
          product_stock: 1,
          warehouse_id: 1,
          product_image: "/uploads/img.jpg",
          product_status: "Sudah sampai",
          arrival_at: new Date(),
        },
        {
          product_code: 1002,
          product_name: "Baby socks",
          category_id: 2,
          product_stock: 2,
          warehouse_id: 2,
          product_image: "/uploads/img1.jpg",
          product_status: "Sudah sampai",
          arrival_at: new Date(),
        },
        {
          product_code: 1003,
          product_name: "Baby socks",
          category_id: 3,
          product_stock: 3,
          warehouse_id: 3,
          product_image: "/uploads/img2.jpg",
          product_status: "Sudah sampai",
          arrival_at: new Date(),
        },
        {
          product_code: 1004,
          product_name: "Baby socks",
          category_id: 4,
          product_stock: 4,
          warehouse_id: 4,
          product_image: "/uploads/img3.jpg",
          product_status: "Sudah sampai",
          arrival_at: new Date(),
        },
        {
          product_code: 1005,
          product_name: "Baby socks",
          category_id: 5,
          product_stock: 5,
          warehouse_id: 5,
          product_image: "/uploads/img4.jpg",
          product_status: "Sudah sampai",
          arrival_at: new Date(),
        },
      ],
    });

    //Seeding User
    const User = await prisma.user.createMany({
      data: [{
        first_name: "Beak",
        last_name: "lurr",
        username: "beaknih",
        email: "beak@gmail.com",
        password: "$2a$12$eQ3sHkP/czU2c1vXV8c9OOeJnUg.LmlKV60GxoXn1BlEEjuZaalRe", //password: 11111
        user_address: "aaaaaa",
        user_role: "user",
      },
      {
        first_name: "Joko",
        last_name: "Wadidaw",
        username: "admin",
        email: "jokowow@gmail.com",
        password: "$2a$12$PuiErMJhBJ8W8KzfdpywM.zsHcq9amzIi9xMtdcS3ol/tjIxQiXZG", //password: admin
        user_address: "jl. ditempat",
        user_role: "admin",
      },
      {
        first_name: "Pak",
        last_name: "Unyil",
        username: "warehouse",
        email: "pakunyil@gmail.com",
        password: "$2a$12$TUk4fy4wNWp8TtZteofigeuaL5CRdKDufphiU5LXKC0DC8narBq9u", //password: warehouse
        user_address: "jl. nanti dulu masih hujan",
        user_role: "warehouse",
      },]
    });

    //Seeding Product Shipping
    const productShipping = await prisma.product_shipping.create({
      data: {
        product_id: 1,
        buyer_id: 1,
        warehouse_id: 1,
        quantity: 1,
        tracking_number: "01256JK0088L88l23",
        product_shipment_status: "diterima",
      },
    });

    const notification = await prisma.notification.create({
      data: {
        user_id: 1,
        notification_title: "Alert",
        notification_description: "Product X at Warehouse A has exceeded 3 months in storage ",
      },
    })

    console.log("Seeding complete.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seedData()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
