import React, { useEffect, useState} from 'react'
import { jwtDecode } from "jwt-decode"
import { getUserSpecific } from "../modules/fetch/index"
import { UserCircleIcon } from"@heroicons/react/24/solid"


const HaloUser = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const user = await checkuser();
        setData(user);
        
      } catch (error) {
        console.error("Error fetching data:", error.response || error.message || error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      specificUser = user.user;
      return specificUser;
    } catch (err) {
      console.error(err);
      throw new Error("Internal Server Error");
    }
  };
    
  return (
    <div className='p-[20px] mt-2 flex justify-center'>
      <div className='grid place-items-center'>
        <div className=''>
        <h1 className='text-tertiary font-semibold text-4xl'>{data.username}</h1>
        </div>
        <div>
        <h1 className='text-2xl font-light text-slate-400'>{data.user_role}</h1>
        </div>
        </div>
    </div>
  )
}

export default HaloUser
