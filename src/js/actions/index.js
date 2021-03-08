export function getStatData() {
  const getRequest = "https://cors-anywhere.herokuapp.com/https://thevirustracker.com/free-api?countryTotal=TT"
  return function (dispatch) {
    return fetch(getRequest)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "STAT_DATA_LOADED", payload: json });
        console.log(json)
      });
  };
}


export function getNewsData() {
  const getRequest = "https://cors-anywhere.herokuapp.com/https://thevirustracker.com/free-api?countryNewsTotal=TT"
  return function (dispatch) {
    return fetch(getRequest)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "NEWS_DATA_LOADED", payload: json });
        console.log(json)
      });
  };
}

