import '@babel/polyfill'
export const getAllData = async() =>{

        const response = await fetch(`http://localhost:3000/data`)
        const data = await response.json()
        return data
         
}