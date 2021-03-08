const initialState = {
  stats: [],
  news: []
};

function rootReducer(state = initialState, action) {

  if (action.type === "STAT_DATA_LOADED") {
    return Object.assign({}, state, {
      stats: state.stats.concat(action.payload)
    });
  }

  if (action.type === "NEWS_DATA_LOADED") {
    return Object.assign({}, state, {
      news: state.news.concat(action.payload)
    });
  }


  return state;

}

export default rootReducer;