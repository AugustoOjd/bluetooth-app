import React from 'react'
import Card from './Card'

function Dashboard() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-sm">
                <Card/>
            </div>
            <div className="col-sm">
                <Card/>
            </div>        
            <div className="col-sm">
                <Card/>
            </div>        
            <div className="col-sm">
                <Card/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard