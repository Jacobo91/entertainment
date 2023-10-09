import * as React from 'react';

export const useRandom = () => {
    console.log("Fetching Random")
    const [isLoadingRandom, setIsLoadingRandom] = React.useState(false);
    const [hasErrorRandom, setHasErrorRandom] = React.useState(false);
    const [randomData, setRandomData] = React.useState([]);

    React.useEffect(() => {

        const getRandom = async () => {
            const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?list=most_pop_movies&limit=30';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '584cee3d4cmshbc7ed3c23b24627p11e5c4jsn1dfbb3334930',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                },
            };

            try {
                setIsLoadingRandom(true)
                const response = await fetch(url, options);
                if (response) {
                    const result = await response.json();
                    const filteredResults = result.results?.filter(title => title.primaryImage && title.primaryImage !== null);
                    setIsLoadingRandom(false);
                    setRandomData(filteredResults);
                }
            } catch (error) {
                setHasErrorRandom(error)
                console.error(error);
            }
        };
        getRandom();
    },[]);

    return { 
        isLoadingRandom, 
        hasErrorRandom, 
        randomData }
}
