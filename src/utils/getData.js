const getData = API => {
    return(
        fetch(API).then(res => res.json())

    );
}
export default getData;
