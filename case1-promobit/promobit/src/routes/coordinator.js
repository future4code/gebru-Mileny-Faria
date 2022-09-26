export const goToHomePage = (navigate) => {
    navigate('/')
}
  
  export const goToDetailsMoviePage = (navigate, id) => {
    navigate(`/movie/${id}`)
}