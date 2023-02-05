import axios from 'axios'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroes = () => {
  const { data, isLoading, error } = useQuery('super-heroes', fetchSuperHeroes)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error.message}</h2>
  }

  console.log(data)

  return (
    <div className="superheroes">
      <h2 className="superheroes__title">Super Heroes</h2>
      <div className="superheroes__list">
        {data?.data.map((hero) => {
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

export default RQSuperHeroes
