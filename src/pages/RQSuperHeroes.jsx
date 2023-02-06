import { Link } from "react-router-dom"
import useSuperHeroes from "../hooks/useSuperHeroes"

const RQSuperHeroes = () => {
  const onSuccess = (data) => {
    console.log('Perform side effect after data fetching', data)
  }

  const onError = (error) => {
    console.log('Perform side effect after encountering error', error)
  }

  const { data, isLoading, isError, error, isFetching, refetch } = useSuperHeroes(onSuccess, onError)

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
              <div className="superheroes__name">
                <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
              </div>
            </div>
          )
        })}

        {/* {data?.map((heroName, index) => {
          return (
            <div className="superheroes__item" key={index}>
              <div className="superheroes__name">{heroName}</div>
            </div>
          )
        })} */}
      </div>
    </div>
  )
}

export default RQSuperHeroes
