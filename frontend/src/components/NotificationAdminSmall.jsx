import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getNotificationByComplaint, getNotificationByReport, deleteNotification } from "../modules/fetch/notification";
import { getUserSpecific } from "../modules/fetch/index";
import { TrashIcon } from "@heroicons/react/24/solid"
import NoNotif from "../assets/NoNotif.jpg"

const NotificationAdminSmall = ({}) => {
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
      const result1 = await getNotificationByComplaint();
      const result2 = await getNotificationByReport();

      let result = []

      if (result1.notification && Array.isArray(result1.notification)) {
        result.push(...result1.notification);
      }
  
      if (result2.notification && Array.isArray(result2.notification)) {
        result.push(...result2.notification);
      }

      if (result.length > 0) {
        const newData = result.map((item) => ({
          ...item,
          username: item.user.username,
          user_role: item.user.user_role,
        }));
        setData(newData);
        setIsNotif(true);
      } else {
        setIsNotif(false); // Set to false if there are no notifications
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
      <div className="p-1">
        {isNotif ? (
        <div className="grid max-h-[350px] p-3 overflow-y-auto 
        scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-300 hover:scrollbar-track-slate-100">
          {data.map((item) => (
            <div
              key={item.notification_id}
              className="border-2 pb-1 mb-2 -mx-2 rounded-lg border-white flex justify-between pt-2 group/full hover:bg-slate-100"
            >
              <div className="pl-3 grid place-items-start cursor-pointer">
                <div className="text-xs max-w-[150px] truncate font-medium text-slate-600">
                  {item.notification_title}
                </div>
                <div className="text-xs max-w-[150px] font-light text-slate-400 truncate">
                  {item.notification_description}
                </div>
                <div className="text-xs font-medium text-slate-400">
                  {`${item.notification_timestamp.slice(11, 13)} d`}
                </div>
              </div>
              <div className="mt-3 pr-5 group/delete">
              <TrashIcon className="w-4 text-slate-300 h-4 group-hover/full:text-red-700 hover:scale-105 group-hover/delete:animate-bounce hover:cursor-pointer"
              onClick={() => deleteNotificationItem(item.notification_id)}
              />
              </div>
            </div>
          ))}
        </div>
        ) : (
        <div className="grid place-items-center">
          {/* <img src={NoNotif} className="w-[400px] pt-10" /> */}
          <h1 className="text-black text-3xl font-semibold">There is no notification</h1>
        </div>
        ) }
        
      </div>
    </>
  );
};

export default NotificationAdminSmall;
