import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  const id = useParams().id;
  const [datas, setDatas] = useState([]);
  const [data, setData] = useState({});
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setDatas(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Find the selectedData inside this useEffect
    let selectedData = datas.find((d) => {
      return d.id == id;
    });
    setData(selectedData);

    setTimeout(() => {
      setLoadingState(false);
    }, 300);
  }, [id, datas]);

  console.log(datas);
  console.log(data);
  // Set loadingState to false on error
  if (loadingState) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (data) {
    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <img src={data.image} alt="" />
      </div>
    );
  } else {
    return (
      <div>
        <h1>404 Data not found</h1>
      </div>
    );
  }
};

export default Detail;











// const Detail = () => {
//   const params = useParams();
//   const [selectedData, setSelectedData] = useState(null);
//   const [error, setError] = useState(null);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         setData(response.data);
//         console.log(response.data); // Log updated data here
//       } catch (error) {
//         setError("Error fetching data");
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [params.id]);

//   useEffect(() => {
//     console.log(data); // Log updated data here as well
//   }, [data]); // This useEffect will run when data changes

//   if (params.id) {
//     const d = data.find((dt) => dt.id == params.id); // Use double equals
//     if (d != null) {
//       setSelectedData(d);
//     } else {
//       setError("Data not found");
//     }
//   }

//   if (error) {
//     return (
//       <div>
//         <h1>404!</h1>
//         <p>{error}</p>
//       </div>
//     );
//   }

//   if (selectedData) {
//     return (
//       <div>
//         <h1>{selectedData.name}</h1> {/* Change to 'name' */}
//         <p>{selectedData.description}</p>
//       </div>
//     );
//   }

//   // Return loading state or anything else as needed
//   return <div>Loading...</div>;
// };

// export default Detail;
