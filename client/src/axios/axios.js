import axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:3000/'
})

export const getAllProducts = async () =>{
    var prs 
    instance.get('/product')
    .then(res=>{
        prs = res.data
    })
    .catch(err=>{
        return err
    })
    return prs
}

export const getProductsByCategory = (category) =>{
    instance.get(`/product/${category}`)
    .then(res=>{
        return res
    })
    .catch(err=>{
        return err
    })
}


export default instance ;