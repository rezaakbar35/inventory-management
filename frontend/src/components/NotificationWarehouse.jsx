import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getNotificationByWarning,deleteNotification } from "../modules/fetch/notification";
import { getUserSpecific } from "../modules/fetch/index";
import { TrashIcon } from "@heroicons/react/24/solid"
import NoNotif from "../assets/NoNotif.jpg"

const NotificationWarehouse = ({}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isNotif, setIsNotif] = useState(false)
  
  let specificUser;

  const checkuser = async () => {
    try {
      const userToken = window.localStorage.getItem("token");
      if (!userToken) {
        console.error("Token is missing");
        throw new Error("Unauthorized");
      }

      let decodedToken;
      try {
        decodedToken = jwtDecode(userToken);
      } catch (error) {
        console.error("Invalid or expired token:", error);
        throw new Error("Unauthorized");
      }

      const user = await getUserSpecific(decodedToken.userId);
      specificUser = user.user.username;
      return specificUser;
    } catch (err) {
      console.error(err);
      throw new Error("Internal Server Error");
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const username = await checkuser();
      const result = await getNotificationByWarning();

      if (result.notification && Array.isArray(result.notification)) {
        const newData = result.notification.map((item) => ({
          ...item,
          username: item.user.username,
          user_role: item.user.user_role,
        }));
        setData(newData);
        setIsNotif(!!newData.length);
      } else {
        console.error(
          "Response yang tidak valid atau tidak dapat di-iterasi dari getAllNotification"
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteNotificationItem = (id) => {
    deleteNotification(id).then((response) => {
      console.log(response);
      fetchData();
    });
  };

  return (
    <>
      <div className="p-2">
        {isNotif ? (
        <div className="grid max-h-[650px] p-3 overflow-y-auto 
        scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-300 hover:scrollbar-track-slate-100">
          {data.map((item) => (
            <div
              key={item.notification_id}
              className="border-b-2 border-gray-200 flex justify-between pt-2 group/full hover:bg-slate-100"
            >
              <div className="grid place-items-start cursor-pointer">
                <div className="text-md font-medium text-slate-600">
                  {item.notification_title}
                </div>
                <div className="text-md max-w-[300px] font-light text-slate-400 truncate">
                  {item.notification_description}
                </div>
                <div className="text-md font-medium text-slate-400">
                  {`${item.notification_timestamp.slice(11, 13)} d`}
                </div>
              </div>
              <div className="mt-5 pr-5 group/delete">
              <TrashIcon className="w-6 h-6 group-hover/full:text-red-700 hover:scale-105 group-hover/delete:animate-bounce hover:cursor-pointer"
              onClick={() => deleteNotificationItem(item.notification_id)}
              />
              </div>
            </div>
          ))}
        </div>
        ) : (
        <div className="grid place-items-center">
          <img src={NoNotif} className="w-[400px] pt-10" />
          <h1 className="text-black text-3xl font-semibold">There is no notification</h1>
        </div>
        ) }
        
      </div>
    </>
  );
};

export default NotificationWarehouse;
