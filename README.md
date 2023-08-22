# Entertainment App - API (MoviesDatabase)

- react-router-dom
- mui  
- react hooks
- lodash debounce
- react lazy load image component

## instruction

## index.css contains all global classes and variables:

class (title) controls: font-size, font-weight and margin-bottom of H2 titles (Trending & Recommended for you)
class (center-content) is used to center as it name says hahaha 😂


### Main

- the bottom padding is controlled here

### Recommended Component is reused through navigation

- It is used in Pages: (movies, series and bookmarked)

## Card

One card works for all, having the following props:

- sizing: large and default classes (sets as default if large is not used)
- titleBar : activeTitleBar and default classes (sets as default if titleBar is not used)

# API calls
- API calls are made though a custom hook called useTitles that received the following props (genre, startYear, titleType, limit, searchTerm), searchTerm is used to fetch by title name through the search bar and is debounced to avoid making too many requests to it.

- genre is the only prop the user can interact with by using the genres selector, which is set using useContext so its value can be easily used on the Components(Movies and Series). 