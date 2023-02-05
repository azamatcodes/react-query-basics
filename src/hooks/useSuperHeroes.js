import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}

const useSuperHeroes = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
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
    enabled: false, // default is - true
    // Success and Error callback
    onSuccess: onSuccess,
    onError: onError,
    // Data Transformation
    select: (data) => {
      const superHeroNames = data.data.map((hero) => hero.name)
      console.log(superHeroNames)
      return superHeroNames
    }
  })
}

export default useSuperHeroes
