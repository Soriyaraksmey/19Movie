const init = {
    details: {},
    video: {},
    img: {},
    similar: {}
}

const MovieDetailReducer = (state = init, action) => {
    switch (action.type) {
        case "GET_MOVIE_DETAIL":
            return ({
                ...state,
                details: action.payload.details,
                video: action.payload.video,
                img: action.payload.img,
                similar: action.payload.similar
            })
        default:
            return ({ ...state })
    }
}

export default MovieDetailReducer;