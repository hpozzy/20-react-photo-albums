// import React, { useState, useEffect } from "react"
// import logo from "./logo.svg"
// import "./App.css"
// import axios from "axios"
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
// } from "react-router-dom"
// import Card from "./Card.js"
// import Myalbums from "./Myalbums"
// function Picname() {
//   const [album, setAlbum] = useState([])
//   const { id } = useParams()
//   useEffect(() => {
//     axios.get(`http://localhost:3000/albums/${id}`).then((r) => {
//       const albumInfo = r.data.photos
//       setAlbum(albumInfo)
//       console.log(albumInfo)
//     })
//   }, [])

//   return (
//     <div className="container">
//       <div className="mainHeader"></div>

//       <div className="pageContent">
//         {album.map((item) => (
//           <div>{/* <Card img src={item.thumbnail} /> */}</div>
//         ))}
//       </div>
//     </div>
//   )
// }
// export default Picname
