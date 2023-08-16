export const choppedTitle = (title) => {
    return title.length > 20 ? title.slice(0, 20) + "..." : title;
};