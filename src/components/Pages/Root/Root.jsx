import React from 'react'
import { Outlet } from "react-router-dom"
import Header from "../../UI/Header"

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Root