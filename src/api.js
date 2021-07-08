const baseurl = 'https://api.themoviedb.org/3/';

//return all lastestmovie
export const LastestMovieURL = () => `${baseurl}movie/now_playing`
//returnall trading movie
export const TrandingMovieUrl = () => `${baseurl}trending/all/day`
//return all tvshows
export const TvShowUrl = () => `${baseurl}tv/popular`;
//get movie details
export const GetDetailUrl = (movie_id) => `${baseurl}movie/${movie_id}`;
export const GetVideoUrl = (movie_id) => `${baseurl}movie/${movie_id}/videos`;
export const GetImgUrl = (movie_id) => `${baseurl}movie/${movie_id}/images`;
export const GetsimilarMovieUrl = (movie_id) => `${baseurl}movie/${movie_id}/similar`;
//get upcomming movie
export const UpcommingMovieUrl = () => `${baseurl}movie/upcoming`;
//search

export const SearchMovieUrl = (movie_name) => `
${baseurl}search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${movie_name}&page=1&include_adult=true`;
