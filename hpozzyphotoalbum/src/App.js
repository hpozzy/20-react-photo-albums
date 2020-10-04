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
import Myalbums from "./Myalbums"
import AlbumNames from "./Albumnames"
import Picname from "./Picname"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Myalbums />
        </Route>

        <Route path="/Albumnames/:id">
          <AlbumNames />
        </Route>

        {/* <Route path="/Picnames/:id">
          <Picname />
        </Route> */}
      </Switch>
    </Router>
  )
}

export default App
