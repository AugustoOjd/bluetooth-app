"use client"

import React, { useContext, useEffect } from 'react'
import Dashboard from '../../components/dashboard/Dashboard'
import AuthContext from '../../context/AuthProvider';

function DashboardPage() {
  // const { validationCookie, user } = useContext(AuthContext)

  // useEffect(() => {
  //   validationCookie()
  //   console.log(user)
  // }, [])
  
  return (
    <>
      <Dashboard/>
    </>
  )
}

export default DashboardPage