import axios from 'axios'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroes = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      cacheTime: 300000, // default value is - 5 minutes
      // Stale Time
      staleTime: 1000 * 20, // default value is - 0
      // Refetch Defaults
      refetchOnMount: true, // default value is - true
      refetchOnWindowFocus: true, // default value is - true
      // Polling
      refetchInterval: 12000, // default value is - false
      refetchIntervalInBackground: true // default value is - false
    }
  )

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  console.log({ isLoading, isFetching })

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
