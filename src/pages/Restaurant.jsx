import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../config/axiosinstance'
import { RestaurantCards } from '../components/Cards';

export const Restaurant = () => {

    const [restData, setRestData] = useState([]);
    const getAllRestaurants = async () => {
      try {
        const response = await axiosInstance({
          method: "GET",
          url: "/rest/restaurants",
        });
        console.log(response.data);
        setRestData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
        getAllRestaurants();
    }, []);
    
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    //   {restData.map((restaurant) => (
    //     <div
    //       key={restaurant._id}
    //       className="py-5 px-5 mx-auto shadow-xl rounded-md"
    //     >
    //       <img
    //         src={restaurant.image}
    //         alt={restaurant.name}
    //         className="w-[300px] rounded-md "
    //       />
    //       <h2>{restaurant.name}</h2>
    //       <h3>{restaurant.address}</h3>
    //       <div>
    //         <button className="py-1 px-2 bg-orange-400 font-semibold rounded-md mt-4">
    //           Explore
    //         </button>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <>restaurant</>
  );
}
