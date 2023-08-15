import * as React from 'react';



export const useTitles = (
    genre,
    startYear,
    titleType,
    limit
) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const getTitles = async () => {
            const urlNoGenre = `https://moviesdatabase.p.rapidapi.com/titles?startYear=${startYear}&limit=${limit}`;
            const url = genre ? `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&startYear=${startYear}&titleType=${titleType}&limit=${limit}` : urlNoGenre;
            
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
                    const filteredResults = result.results?.filter(title => title.primaryImage && title.primaryImage !== null)
                    console.log("data:", result)
                    setIsLoading(false);
                    setData(filteredResults)
                }

            } catch (error) {
                setHasError(error)
            }
        };
        getTitles(genre, startYear, titleType, limit);
    }, [genre, limit, startYear, titleType]);

    return {
        isLoading,
        hasError,
        data
    }
};

