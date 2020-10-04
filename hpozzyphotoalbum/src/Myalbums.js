import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom"
import axios from "axios"
import "./App.css"
import Card from "./Card"

function Myalbums() {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/albums").then((r) => {
      const albumInfo = r.data
      setAlbums(albumInfo)
    })
  }, [])

  let images = []
  albums.map((item) => {
    images.push(item.thumbnailOne)
    console.log(images)
  })
  let titles = []
  albums.map((item) => {
    titles.push(item.title)
    console.log(titles)
  })

  return (
    <div className="container">
      <div className="mainHeader">
        <h3>My Albums</h3>
      </div>
      <div className="pageContent">
        <Link className="linkTags" to={`/Albumnames/1`}>
          <Card src={images[0]} children={titles[0]} />
        </Link>
        <Link className="linkTags" to={`/Albumnames/2`}>
          <Card src={images[1]} children={titles[1]} />
        </Link>
        <Link className="linkTags" to={`/Albumnames/3`}>
          <Card src={images[2]} children={titles[2]} />
        </Link>
      </div>
      <div className="pageContent">
        <Link className="linkTags" to={`/Albumnames/4`}>
          <Card src={images[3]} children={titles[3]} />
        </Link>
        <Link className="linkTags" to={`/Albumnames/5`}>
          <Card src={images[4]} children={titles[4]} />
        </Link>
        <Link className="linkTags" to={`/Albumnames/6`}>
          <Card src={images[5]} children={titles[5]} />
        </Link>
      </div>
    </div>
  )
}

export default Myalbums
