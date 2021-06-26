const init = {
    details: {},
    video: [],
    img: {},
    similar: {},
    isLoading: true,
}

const MovieDetailReducer = (state = init, action) => {
    switch (action.type) {
        case "GET_MOVIE_DETAIL":
            return ({
                ...state,
                details: action.payload.details,
                video: action.payload.video,
                img: action.payload.img,
                similar: action.payload.similar,
                isLoading: false,
            });
        case "CLEAR_STATE":
            return ({
                ...state,
                details: {},
                video: {},
                img: {},
                similar: {},
                isLoading: true,
            });
        default:
            return ({ ...state })
    }
}

export default MovieDetailReducer;