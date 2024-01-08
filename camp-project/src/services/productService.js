import axios from "axios"


export default class productService{
    getProducts(){
        return axios.get("https://dummyjson.com/products")
    }
    getProductById(productId){
        return axios.get(`https://dummyjson.com/products/${productId}`)
    }
}