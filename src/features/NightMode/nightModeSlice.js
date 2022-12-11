const NightModeActions = {
    toggleNightMode: 'nightMode/toggle'
}

const initialState = {
    nightModeStatus: false
}

export default function nightModeReducer(state = initialState, action) {
    switch (action.type) {
        case NightModeActions.toggleNightMode: {
            return {
                ...state,
                nightModeStatus: !state.nightModeStatus,
            }
        }
        default:
            return state;
    }
}

export const nightModeToggled = () => ({type: NightModeActions.toggleNightMode})

export const getNightModeStatus = (state) => state.nightMode.nightModeStatus;