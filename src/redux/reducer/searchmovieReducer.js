const initstate = {
    Search: [],
}

const SearchMovieReducer = (state = initstate, action) => {
    switch (action.type) {
        case "SEARCH_MOVIE":
            return {
                ...state,
                Search: action.payload.searchmovie,
            }
        case "CLEAR_SEARCH":
            return {
                ...state,
                Search: [],
            }
        default:
            return {
                ...state,
            }
    }
}

export default SearchMovieReducer;