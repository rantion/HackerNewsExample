export const newsItemsLoading = () => ({type: 'newsItems/newsItemsLoading'})
export const newsItemsLoaded = (items) => ({
    type: 'newsItems/newsItemsLoaded',
    payload: items,
});