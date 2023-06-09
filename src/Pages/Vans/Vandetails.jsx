import React ,{useState,useEffect}from 'react'

import { Link, useParams } from 'react-router-dom'

const Vandetails = () => {
    const {id} = useParams();

  const [van, vansD]=useState(null)


    useEffect(()=>{

        fetch(`/api/host/vans/${id}`)
        .then(res=> res.json())
        .then(data => vansD(data.vans))

    },[])
  return (
    <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
  )
}

export default Vandetails