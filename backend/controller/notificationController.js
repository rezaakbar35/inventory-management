const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const notificationController = {
  // Method GET
  getAllNotification: async (req, res) => {
    const notification = await prisma.notification.findMany({
        include: {
            user: {
                select: {
                    username: true,
                    user_role: true,
                }
            }
        }
    });
    res.status(200).json({ message: "Successfully found all notification", notification });
  },

  //get notifikasi dari status
  getNotificationByStatus: async (req, res) => {
    try{
    const { notification_status } = req.body
    const notification = await prisma.notification.findMany({
        where: {
          notification_status: notification_status
        },
        include: {
            user: {
                select: {
                    username: true,
                    user_role: true,
                }
            }
        }
    });
    res.status(200).json({ message: "Successfully found all notification", notification });
  } catch (error) {
    console.log(error);
      res.status(400).json({ message: "Notification not found" });
  }
  },

  getByIdNotification: async (req, res) => {
    try {
      const { id } = req.params;
      const notification = await prisma.notification.findUnique({
        where: { 
        notification_id: Number(id) ,
        },
        include: {
            user: {
                select: {
                    username: true,
                    user_role: true,
                }
            }
        }
      });
      res.status(200).json({ message: "Successfully found specific notification", notification });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Notification not found" });
    }
  },

  //create notifikasi
  createNotification: async (req, res) => {
    try {
      const { notification_title, notification_description, username, notification_status, } = req.body;
  
      // Find the user based on username and user_role
      const user = await prisma.user.findUnique({
        where: {
          username: username
        },
      });
  
      if (!user) {
        // Handle the case where the user is not found
        return res.status(404).json({ message: "User not found" });
      }
  
      // Create the notification and associate it with the user
      const notification = await prisma.notification.create({
        data: {
          notification_title,
          notification_description,
          user_id: user.user_id, // Assuming 'id' is the primary key of the user table
          notification_status: notification_status,
        },
      });
  
      res.status(201).json({ message: "Create notification successfully", notification });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating notification" });
    }
  },

  // Method PUT
  updateNotification: async (req, res) => {
    try {
      const { notification_title, notification_description, username, notification_status } = req.body;
      const { id } = req.params;

      const user = await prisma.user.findUnique({
        where: {
          username: username
        },
      });
  
      if (!user) {
        // Handle the case where the user is not found
        return res.status(404).json({ message: "User not found" });
      }
      const notification = await prisma.notification.update({
        where: { notification_id: Number(id) },
        data: {
          notification_title,
          notification_description,
          user_id: user.user_id,
          notification_status,
        },
      });
      res.status(200).json({ message: "Update notification Successfull", notification });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Error to Update notification" });
    }
  },

  // Method DELETE
  deleteNotification: async (req, res) => {
    try {
      const { id } = req.params;
      const notification = await prisma.notification.delete({
        where: { notification_id: Number(id) },
      });
      res.status(200).json({ message: "Delete Successfull", notification });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Error to Delete notification" });
    }
  },
};

module.exports = notificationController;
