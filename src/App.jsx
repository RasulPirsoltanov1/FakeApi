import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import AppSub from "./AppSub";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import React, { useEffect, useMemo, useRef, useState } from "react";





function App() {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}











// const Counter = React.memo(({ increment }) => {
//   console.log("counting...");
//   return (
//     <>
//       <h1 onClick={increment}>Salam</h1>
//     </>
//   );
// });

// function App() {
//   const [count, setCount] = useState(1);

//   return (
//     <>
//       {count}
//       <hr />
//       <Counter increment={() => setCount(count + 1)}></Counter>
//       <button onClick={() => setCount(count + 1)}>➕</button>
//     </>
//   );
// }

















// function App() {

//   const [count, setCount] = useState(1);
//   const [text, setText] = useState('');
//   var arr = [];
//   const infinitive = useMemo(() => {
//     arr = [...new Array(10000000)];
//     return count * 3;
//   }, []);

//   return (
//     <>

//       <input type="text" onChange={(e) => {
//         setText(e.target.value);
//       }} />
//       {
//         text
//       }
//       {
//         arr.map((a) => {
//           return a;
//         })
//       }
//       {
//         infinitive
//       }
//     </>
//   )
// }

















// function App() {

//   const inputRef = useRef();
//   const countRef = useRef(0);
//   useEffect(() => {
//     // let text = document.getElementById("text");
//     // console.log(text);
//     // console.log(textRef.current);
//   }, []);

//   return (
//     <>
//         <input type="text" ref={inputRef}/>
//         <button onClick={()=>{
//           console.log(inputRef,inputRef.current);
//           inputRef.current.focus(); // input elementine odaklan
//         }}>focus</button>
//     </>
//   )
// }













// function App() {

//   const textRef = useRef();
//   const countRef = useRef(0);
//   useEffect(() => {
//     let text = document.getElementById("text");
//     console.log(text);
//     console.log(textRef.current);
//   }, []);

//   return (
//     <>
//     <div id="text" ref={textRef}>
//       {countRef.current}

//     </div>
//     <button onClick={()=>{
//         countRef.current++;
//         console.log(countRef)
//       }}>
//         click me
//       </button>
//     </>
//   )
// }










// function App() {

//   return (
//     <center>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/detail/:id" element={<Detail/>}/>
//       </Routes>
//     </Router>
//     </center>
//   )
// }




export default App
