import axios from 'axios'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroes = () => {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
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
      refetchInterval: false, // default value is - false
      refetchIntervalInBackground: false, // default value is - false
      // useQuery on click
      enabled: false
    }
  )

  // For every time showing Loading spinner
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  console.log({ isLoading, isFetching })

  return (
    <div className="superheroes">
      <h2 className="superheroes__title">Super Heroes</h2>

      {/* refetch works with any event */}
      {/* {!data && <button type="button" onClick={refetch}>Fetch Heroes</button>} */}
      <button type="button" onClick={refetch}>Fetch Heroes</button>

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
