import { useAppStore } from "../stores/useAppStore";
import { Drink } from "../types";

type DrinkCardProps = {
  drink: Drink;
};
const DrinkCard = ({ drink }: DrinkCardProps) => {
  const selectRecipe = useAppStore((state) => state.selectRecipe)
  return (
    <div className="border-2  flex-col p-1 justify-center items-center shadow-lg space-y-2  w-60 h-80 rounded-lg bg-slate-200">
      <div className="w-56 h-52 mx-auto">
        <img className="w-full hover:scale-125 transition-all rounded-lg" src={drink.strDrinkThumb} alt={`Imagen de ${drink.strDrink}`} />
      </div>
      <div className="p-4 mt-2">
        <h2 className="text-sm truncate font-black mb-2">{drink.strDrink}</h2>
        <button onClick={() => selectRecipe(drink.idDrink)} type="button" className="bg-orange-400 cursor-pointer hover:bg-orange-500 w-full text-white font-bold py-2 px-4 rounded-3xl"> Ver</button>
      </div>
    </div>
  );
};

export default DrinkCard;
