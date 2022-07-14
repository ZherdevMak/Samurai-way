import axios from "axios";

const BaseUrl = `https://social-network.samuraijs.com/api/1.0/`

const instanse = axios.create({
    withCredentials:true,
    baseURL:BaseUrl,
    headers:{
        'API-KEY': 'd5319fd7-c99a-40ac-b17e-87174e69eee7'
    }
})
export const usersAPI = {
    getUsers(currentPage = 1,pageSize = 10) {

        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=> {
                return response.data
            })
    },
    follow(userID:string) {
       return instanse.post(`follow/${userID}`)
    },
    unfollow(userID:string) {
       return  instanse.delete(`follow/${userID}`)
    }
}

