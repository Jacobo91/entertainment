import  Swal  from 'sweetalert2';


const alertStructure = {
    position: 'top-end',
    icon: 'success',
    showConfirmButton: false,
    timer: 1500,
    background: '#5A698F',
}


export const choppedTitle = (title) => {
    return title.length > 20 ? title.slice(0, 20) + "..." : title;
};

export function addToFavorites(favorites, setFavorites, data) {
    if (favorites) {
        const exitingTitle = favorites.findIndex(title => title.id === data.id);
        if (exitingTitle !== -1) {
            // alert
            Swal.fire({...alertStructure, icon:'warning', title:'Already in favorites'})
            return;
        }
    }
    setFavorites(prevFavorites => [...prevFavorites, data]);
        // alert
        Swal.fire({...alertStructure, title:'Added to favorites'})
}

export function removeFromFavorites(favorites, setFavorites, data) {
    if (favorites) {
        const filteredFavs = favorites.filter((title) => title.id !== data.id);
        setFavorites(filteredFavs);
        // alert
        Swal.fire({...alertStructure, title:'Removed from favorites'})
    }
}