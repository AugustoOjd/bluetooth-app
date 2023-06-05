import React from 'react'
import Card from './Card'
import {data} from '../../app/db/db'


function Dashboard() {
  return (
    <div className='container'>
        <div className="row">
            {
                data.map(d=>             
                <div className="col-sm">
                    <Card title={d.title} description={d.description} price={d.total} img={d.img} paid={d.paid}/>
                </div>
            )
            }
        </div>
    </div>
  )
}

export default Dashboard