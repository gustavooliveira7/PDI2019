import React, { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import './styles.css'

export default function Dashboard() {
    const [spots, setSpots] = useState([])
    const [requests, setRequests] = useState([])
    
    const usuario = localStorage.getItem('user')
   
    useEffect(() => {
        async function loadSpots() {
            const usuario = localStorage.getItem('user')
            const response = await api.get('/dashboard', {
                headers: {
                    usuario
                }
            })

            setSpots(response.data)
        }

        loadSpots()
    }, [])

   
    return (
        <>
            
            <ul className="spot-list">
                { spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{
                            backgroundImage: `url(${spot.thumbnail_url})`
                        }}/>
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
                    </li>
                ))
                }
            </ul>

            <Link to="/new">
                <button className="btn">Cadastrar novo spot</button>
            </Link>
        </>
    )
}