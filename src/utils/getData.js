export async const getData = () => {
    const response = await fetch('localhost')
    const data = await response.json()
    return data
}
