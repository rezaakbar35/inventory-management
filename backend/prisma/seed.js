const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const seedData = async () => {
  try {
    // Seeding Warehouse Categories
    const product = await prisma.product.createMany({
      data: [
      {
        product_code: 1001,
        product_name: 'Baby socks',
        category_id: 1,
        product_stock: 1,
        warehouse_id: 1,
        product_image: "/uploads/img.jpg",
        product_status: "Sudah sampai",
        arrival_at: new Date(),
        
      },
      {
        product_code: 1002,
        product_name: 'Baby socks',
        category_id: 2,
        product_stock: 2,
        warehouse_id: 2,
        product_image: "/uploads/img1.jpg",
        product_status: "Sudah sampai",
        arrival_at: new Date(),
      },
      {
        product_code: 1003,
        product_name: 'Baby socks',
        category_id: 3,
        product_stock: 3,
        warehouse_id: 3,
        product_image: "/uploads/img2.jpg",
        product_status: "Sudah sampai",
        arrival_at: new Date(),
      },
      {
        product_code: 1004,
        product_name: 'Baby socks',
        category_id: 4,
        product_stock: 4,
        warehouse_id: 4,
        product_image: "/uploads/img3.jpg",
        product_status: "Sudah sampai",
        arrival_at: new Date(),
      },
      {
        product_code: 1005,
        product_name: 'Baby socks',
        category_id: 5,
        product_stock: 5,
        warehouse_id: 8,
        product_image: "/uploads/img4.jpg",
        product_status: "Sudah sampai",
        arrival_at: new Date(),
      },
    ]
    });

    const productCategory = await prisma.product_category.createMany({
      data: [
        {
          category_name: "Clothes Baby",
          description: "Clothes for baby",
        },
        {
          category_name: "Clothes Baby",
          description: "Clothes for baby",
        },
        {
          category_name: "Clothes Baby",
          description: "Clothes for baby",
        },
        {
          category_name: "Clothes Baby",
          description: "Clothes for baby",
        },
        {
          category_name: "Clothes Baby",
          description: "Clothes for baby",
        },
        {
          category_name: "Clothes Baby",
          description: "Clothes for baby",
        },
      ]
    })

    const User = await prisma.user.create({
      data: {
        first_name: 'Beak',
        last_name: 'lurr',
        username: 'beaknih',
        email: 'beak@gmail.com',
        password: '11111',
        user_address: 'aaaaaa',
        user_role: 'buyer',
      }
    })

    console.log('Seeding complete.');
  } catch (error) {
    console.error('Error seeding data:', error);
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
