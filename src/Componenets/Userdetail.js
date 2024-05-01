import React from 'react'
import { useSelector } from 'react-redux'

const Userdetail = () => {
    const data = useSelector((store)=>store.user)
    
  return (
    <div>
      <h1>Userdetails</h1>
      <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Password</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((val, id)=>(
                    <tr key={id}>
                    <th>{val.Username}</th>
                    <th>{val.Email}</th>
                    <th>{val.Num}</th>
                    <th>{val.Password}</th>
                    </tr>
                )
                )
            }
        </tbody>
       

      </table>
    </div>
  )
}

export default Userdetail
