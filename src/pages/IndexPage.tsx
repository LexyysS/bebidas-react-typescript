import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"




const IndexPage = () => {
   const drinks = useAppStore((state) => state.drinks)
   const hasDrinks = useMemo(() => drinks.drinks.length , [drinks])
  return (
    <>
        <h1 className="text-5xl font-extrabold mb-4"> Recetas</h1>
        <div className="flex flex-wrap justify-center items-center gap-3 ">
        {hasDrinks ? (
            <>
                {drinks.drinks.map((drink) => (
                    <DrinkCard  key={drink.idDrink} drink={drink}/>
                ))}
            </>
         ) : (
            <p>
                No hay resultados
            </p>
        )}
        </div>
    </>
  )
}

export default IndexPage