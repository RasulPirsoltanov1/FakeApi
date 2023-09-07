import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([]); // Use useState to manage data
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setData(response.data); // Update data state with fetched data
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    console.log(data); // This will correctly log the data received from the API.

    return (
        <div >
            {data.map((d, index) => (
                <div key={index}>
                    <div 
                        style={{ cursor: "pointer", margin: "30px" }}
                        onClick={() => {
                            navigate(`detail/${d.id}`);
                        }}
                    >
                        <a key={index}>{d.title}</a>
                    </div>
                    <img src={`${d.image}`} style={{ width: "100px", height: "100px" }} />

                </div>
            ))}
        </div>
    );
};

export default Home;
