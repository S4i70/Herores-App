import { heroes } from "../data/heroes";

export const getHeroByPublisher = (publisher) => {// publisher recibe "dc comic, marvel"
    
    const validPublisher= ['DC Comics', 'Marvel Comics'];
    if (!validPublisher.includes(publisher)) {
        throw new Error(`${ publisher } is nor a valid publisher`)
    }
    //se valida si entre la busqueda existen los elementos, sino captura el error y lanza un string.
  
    return heroes.filter(heroe=> heroe.publisher=== publisher);
    // retorna los heroes filtrando los parametros del array.
}
