import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroByName } from "../helpers";


export const Search = () => {

  const navi= useNavigate();
  const location= useLocation();

  const { q = '' }= queryString.parse(location.search);
  const heroe= getHeroByName(q);

  const showSearch = (q.length===0);
  const showError =  (q.length > 0) && (heroe.length===0);

  const { searchText, onInputChange }= useForm({
    searchText: q,
  });

  const onSearchSumit= (e) => {
    e.preventDefault();
    navi(`?q=${searchText}`)
  }
  
  return (
    <>
        <h1>Search</h1>
        <hr/>

        <div className="row">
          <div className="col-5">
            <h4>Buscar</h4>
            <hr/>
            <form onSubmit={ onSearchSumit }> 
            {/* //cuando se dispara el formulario */}
              <input
                type="text"
                placeholder="Buscando heroe"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange}
              />
              <button className="btn btn-primary mt-1">
                Buscar
              </button>  
            </form>
          </div>
          <div className="col-7">
              <h4>Resultado</h4>
              <hr/>
              
              <div className="alert alert-primary animate__animated animate__fadeInRight"
                   style={{ display: showSearch ? '' : 'none' }}>
                Buscando Heroe
              </div>

              <div className="alert alert-danger animate__animated animate__fadeInRight"
                  style={{ display: showError ? '' : 'none' }}>
                No se encontro <b>{q}</b>
              </div>
              
              {
                heroe.map( hero=>( 
                  <HeroCard key={hero.id} {...hero}/>
                  )
                )
              }


            </div>

        </div>

    </>
    )
}
