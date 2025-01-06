import axios from "axios";
import { useEffect, useState } from "react";
import Room from "../components/Room";

const AllRoom = () => {
    const [rooms, setRooms] = useState([])
    try {
        useEffect(() => {

            const fetchAllData = async () => {

                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allRooms`)
                console.log(data)
                setRooms(data)
            }
            fetchAllData();

        }, [])



    } catch (error) {
        console.log(error)
    }
    return (
        <div>
            <h3 className="text-center font-bold text-gray-100 text-4xl">All Rooms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto my-16">
                {
                    rooms.map(room => <Room key={room._id} room={room} />)
                }
            </div>
        </div>
    );
};

export default AllRoom;