const initstate = {
    LastestMovie: [],
    Trandings: [],
    Tvshows: [],
    Upcomming: []
}

const MoviesReducer = (state = initstate, action) => {
    switch (action.type) {
        case "FETCH_DATA":
            return {
                ...state,
                LastestMovie: action.payload.LastestMovie,
                Trandings: action.payload.Trandings,
                Tvshows: action.payload.Tvshows,
                Upcomming: action.payload.Upcomming,
            }
        default:
            return {
                ...state,
            }
    }
}

export default MoviesReducer;