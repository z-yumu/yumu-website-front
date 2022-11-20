import Request from '../../utils/request'

const req = new Request({})

const loginApi = (data: any) => req.request({ url: '/auth/login', method: 'POST', data })


export{
    loginApi
}
