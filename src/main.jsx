import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes, useParams} from "react-router-dom"
import App from './App.jsx'
import "./index.css"

function TampilKomponen(){
  const {nama} = useParams()
  return (
    <App nama={nama} />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/:nama" element={<TampilKomponen />} />
        <Route path="*" element={<App nama= "" />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)