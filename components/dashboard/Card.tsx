'use client'

import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/AuthContext'

interface Props {
  title: string,
  description: string,
  price: number,
  img: string,
  paid: any[]
}

const Card = ({title, description, price, img, paid}:Props) => {

  const {user} = useContext(AuthContext)
  const [isPaying, setIsPaying] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsPaying(false)
    }, 2000);

  }, [isPaying])
  

  const payCheck = (user: any) =>{
    setIsPaying(true)
    paid.push(user)
  }

  const connect = async () => {
    let mobileNavigatorObject: any = window.navigator;
    if(mobileNavigatorObject && mobileNavigatorObject.bluetooth) {

      try {
        mobileNavigatorObject.bluetooth.requestDevice({
          filters: [
            {
              namePrefix: 'test',
            },
          ],
          optionalServices: ['test'],
        });
      } catch (error) {
        console.error(error);
      }

    }
  };

  return (
    <div className="card mb-2">
      <img src={img} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">total: ${price}</p>
        
        {
          paid.includes(user)
          ?
          <div className='container'>
            <button type="button" disabled className="btn btn-success mb-2">Payed</button>
            <button type="button" className="btn btn-info  mb-2" onClick={()=> connect()} >Share</button>
          </div>
          :

          <button type="button" className="btn btn-primary" disabled={isPaying?true:false} onClick={()=> payCheck(user)}>Pay Check</button>
        }
        
      </div>
    </div>
  )
}

export default Card