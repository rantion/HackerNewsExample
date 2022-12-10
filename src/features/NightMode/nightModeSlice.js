const initialState = {
    nightModeStatus: false
}

export default function nightModeReducer(state = initialState, action) {
    switch (action.type) {
        case 'nightmode/toggle': {
            return {
                ... state,
                nightModeStatus: !state.nightModeStatus,
            }
        }
        default:
            return state;
    }
}

export const nightModeToggled = () => ({type: 'nightmode/toggle'})

export const getNightModeStatus = (state) => state.nightMode.nightModeStatus;