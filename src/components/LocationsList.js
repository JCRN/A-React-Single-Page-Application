import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'
import LocationCard from './LocationCard'

export default function LocationsList() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(response => {
        setLocations(response.data.results)
      })
      .catch(error => {
        console.error('Server Error', error)
      })
  }, [])

  return (
    <section className='location-list grid-view'>
      <Card.Group itemsPerRow={2}>
        {locations.map(location => (
          <LocationCard key={location.id} location={location} />
        ))}
      </Card.Group>
    </section>
  )
}
