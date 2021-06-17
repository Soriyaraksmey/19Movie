const baseurl = 'https://api.themoviedb.org/3/';

//return all lastestmovie
export const LastestMovieURL = () => `${baseurl}movie/now_playing`
//returnall trading movie
export const TrandingMovieUrl = () => `${baseurl}trending/all/day`
//return all tvshows
export const TvShowUrl = () => `${baseurl}tv/popular`

