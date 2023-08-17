import * as React from 'react';
import { debounce } from 'lodash';


export const useTitles = (
    genre,
    startYear,
    titleType,
    limit,
    searchTerm
) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {

        const getTitles = debounce(async () => {
            const bySearchUrl = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${searchTerm}?exact=false&titleType=movie`;
            const urlNoGenre = `https://moviesdatabase.p.rapidapi.com/titles?startYear=${startYear}&limit=${limit}`;
            const byGenre = `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&startYear=${startYear}&titleType=${titleType}&limit=${limit}`;
            const url = searchTerm ? bySearchUrl : !searchTerm && genre ? byGenre : urlNoGenre;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '584cee3d4cmshbc7ed3c23b24627p11e5c4jsn1dfbb3334930',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };

            try {
                setIsLoading(true)
                const response = await fetch(url, options);
                if (response.ok) {
                    const result = await response.json();
                    const filteredResults = result.results?.filter(title => title.primaryImage && title.primaryImage !== null);
                    setIsLoading(false);
                    setData(filteredResults)
                }

            } catch (error) {
                setHasError(error)
            }
        }, 500);

        getTitles(genre, startYear, titleType, limit);

        return () => {
            getTitles.cancel();
        }

    }, [genre, limit, searchTerm, startYear, titleType]);

    return {
        isLoading,
        hasError,
        data
    }
};

