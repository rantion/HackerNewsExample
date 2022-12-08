export async function fetchNews(dispatch, getState) {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty&orderBy="$priority"&limitToFirst=50')
    dispatch({ type: 'todos/todosLoaded', payload: response.todos })
}