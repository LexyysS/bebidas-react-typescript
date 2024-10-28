import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

const Header = () => {
    const { pathname } = useLocation()
    const isHome  = useMemo(() => pathname === '/', [pathname])
    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    })

    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)
    const searchRecipes = useAppStore((state) => state.searchRecipes)
    const showNotification = useAppStore((state)=> state.showNotification)



    useEffect(() => {
        fetchCategories()
    },[])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = ( e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(Object.values(searchFilters).includes('')){
            showNotification({
                text: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        searchRecipes(searchFilters)


    }


  return (
    <header className={isHome ? 'bg-header bg-center bg-cover bg-no-repeat' : 'bg-slate-800' }>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img src="/logo.svg" alt="Logo Imagen" className="w-32" />
          </div>

          <nav className="flex gap-4">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 font-bold uppercase"
                  : "text-white font-bold uppercase"
              }
              to="/"
            >
              Inicio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 font-bold uppercase"
                  : "text-white font-bold uppercase"
              }
              to="/favorites"
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (

            <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow-md space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-3">
                    <label htmlFor="ingredient" className="block text-white text-lg uppercase font-extrabold">Nombre o Ingredientes</label>
                    <input id="ingredient" type="text" name="ingredient" onChange={handleChange} value={searchFilters.ingredient} className="p-3 w-full rounded-lg focus:outline-none" placeholder="Ej. Vodka, Cafe , Tequila, Agua"/>
                </div>

                <div className="space-y-3">
                    <label htmlFor="category" className="block text-white text-lg uppercase font-extrabold">Categoria</label>
                    <select id="category" name="category" onChange={handleChange} value={searchFilters.category} className="p-3 w-full rounded-lg focus:outline-none">
                        <option value="">-- Seleccione --</option>
                        {categories.drinks.map(category => (
                            <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                        ))}
                    </select>
                </div>

                <input type="submit" value="Buscar" className="bg-slate-800 hover:bg-slate-700 cursor-pointer text-white rounded-lg w-full uppercase p-2"/>
            </form>


        )}


      </div>

    </header>
  );
};

export default Header;
