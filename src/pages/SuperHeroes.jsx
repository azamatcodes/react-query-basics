import axios from 'axios'
import { useEffect, useState } from 'react'

const SuperHeroes = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  console.log(data)

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then((response) => {
      setData(response.data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="superheroes">
      <h2 className="superheroes__title">Super Heroes</h2>
      <div className="superheroes__list">
        {data?.map((hero) => {
          return (
            <div className="superheroes__item" key={hero.id}>
              <div className="superheroes__name">{hero.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SuperHeroes
