import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  createNotification,
  updateNotification,
  getNotificationById,
} from "../../modules/fetch/notification";

const NotifyAdminForm = ({ visible, onClose, id }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) {
    return null;
  }

  const [notificationStatus, setNotificationStatus] = useState("");
  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setNotificationStatus(e.target.value);
  };

  const handleSubmit = async (e) => {

    try {
      await createNotification(
        e.target.notification_title.value,
        e.target.notification_description.value,
        e.target.username.value,
        notificationStatus
      );
    } catch (err) {
      setError(`Error: ${err.message}`)
      console.log(err);
    }
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="flex justify-center w-screen h-screen bg-black/30 absolute backdrop-blur"
    >
      <div className="m-auto rounded-3xl w-1/3 h-3/4 bg-white p-5">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <XMarkIcon className="w-6 h-6 text-black" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-3xl font-bold text-black mb-6">Notify Admin</div>
          <div className="grid mt-2">
            <div className="flex justify-start">
              <label
                htmlFor="notification_status"
                className="text-black italic font-light pl-2"
              >
                Topic
              </label>
            </div>
            <select
              name="notification_status"
              id="notification_status"
              className="rounded-xl bg-gray-300 text-black p-2 m-1"
              onChange={handleSelectChange}
              value={notificationStatus}
            >
              <option value="" disabled hidden className="text-gray-400">
                select a topic...
              </option>
              <option value="Complaint">Complaint</option>
              <option value="Review">Review</option>
            </select>
          </div>
          <div className="grid mt-2">
            <div className="flex justify-start">
              <label
                htmlFor="username"
                className="text-black italic font-light pl-2"
              >
                Username
              </label>
            </div>
            <input
              type="text"
              name="username"
              id="username"
              className="rounded-xl text-black p-2 m-1"
            />
          </div>
          <div className="grid mt-2">
            <div className="flex justify-start">
              <label
                htmlFor="notification_title"
                className="text-black italic font-light pl-2"
              >
                Notification Title
              </label>
            </div>
            <input
              type="text"
              name="notification_title"
              id="notification_title"
              className="rounded-xl text-black p-2 m-1"
            />
          </div>
          <div className="grid mt-2">
            <div className="flex justify-start">
              <label
                htmlFor="notification_description"
                className="text-black italic font-light pl-2"
              >
                Description
              </label>
            </div>
            <textarea
              name="notification_description"
              id="notification_description"
              className="rounded-xl text-black p-2 pb-24 m-1"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-white font-bold bg-primary mt-5 mr-1 px-5 py-2 rounded-full"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotifyAdminForm;
