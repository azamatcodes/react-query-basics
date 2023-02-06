import { useParams } from "react-router-dom"
import useSuperHero from "../hooks/useSuperHero"

const RQSuperHero = () => {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useSuperHero(id)

  if(isLoading) {
    return <h2>Loading...</h2>
  }

  if(isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>{data?.data.name} - {data?.data.alterEgo}</div>
  )
}

export default RQSuperHero