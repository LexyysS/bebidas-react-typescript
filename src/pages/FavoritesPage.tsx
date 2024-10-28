import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"



const FavoritesPage = () => {

  const favorites = useAppStore((state) => state.favorites)
  const hasFavorites = useMemo(() => favorites.length,[favorites])
  return (
    <>
      <h1 className="text-5xl font-extrabold">Favoritos</h1>
      {hasFavorites ? (

<div className="flex flex-wrap justify-center items-center gap-3">
{favorites.map((recipe) => (
    <DrinkCard  key={recipe.idDrink} drink={recipe}/>
))}
</div>



      ):(
        <p className="my-10 text-center text-2xl"> Aun no tienes favoritos</p>
      )}
       
       
    
    </>
  )
}

export default FavoritesPage