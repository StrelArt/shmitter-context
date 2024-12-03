import {CHANGE_AVATAR, CHANGE_NAME, CHANGE_STATS} from "../actions/userAction.js";

export const twitterReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...state, user: {...state.user, avatar: action.payload || state.user.avatar}};
        case CHANGE_NAME:
            return {...state, user: {...state.user, name: action.payload || state.user.name}};
        case CHANGE_STATS:
            { const {statsType, sum} = action.payload;
            const currentStat = state.stats[statsType] || 0;
            const updatedStat = Math.max(0, currentStat + sum);
            return {...state, stats: {...state.stats, [statsType]: updatedStat}}; }
        default:
            return state;

}};