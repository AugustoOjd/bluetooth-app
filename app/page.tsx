'use client';

import React, { useContext, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import AuthContext from '../context/AuthContext';

type Inputs = {
  firstName?: string,
  lastName?: string,
  email: string,
  password: string
};

const IndexPage = () => {

  const [login, setLogin] = useState(true)
  const { loginUser } = useContext(AuthContext)

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => await loginUser(data.email, data.password)
  // await loginUser(data.email, data.password)

  return (

    <div className='card'>
      <div className='card-body'>

      <h3>{login? 'Login' : 'Register'}</h3>
      {
        
        login
        ?
        <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" {...register("email")} />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" {...register("password")} />
        </div>

        <div className='container'>
          <button type="submit" className="btn btn-primary" style={{marginRight: 12}}>Login</button>

          <button type="button" className="btn btn-outline-secondary" onClick={()=> setLogin(false)}>Register</button>
        </div>

      </form>
      :
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="mb-3">
          <label className="form-label">FirstName</label>
          <input type="email" className="form-control" {...register("firstName")}/>
        </div>
        
        <div className="mb-3">
          <label className="form-label">LastName</label>
          <input type="email" className="form-control" {...register("lastName")} />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" {...register("email")} />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" {...register("password")} />
        </div>

        <div className='container'>
          <button type="submit" className="btn btn-primary" style={{marginRight: 12}}>Register</button>

          <button type="button" className="btn btn-outline-secondary" onClick={()=> setLogin(true)}>Login</button>
        </div>

      </form>
      
      }

      </div>
    </div>

  )
}

export default IndexPage