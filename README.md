# Entertainment App - API (MoviesDatabase)

- react-router-dom
- mui  
- redux toolkit

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
- API calls are made though a custom hook called useTitle that received the following props (genre, startYear, titleType, limit)

- genre is the only prop the user can interact with by using the genres selector, which is set using useContext so its value can be easily used on the Components(Movies and Series). 