function getData(API, setData) {
    fetch(API)
        .then(response => response.json())
        .then(data => setData(data))
}

export default getData


