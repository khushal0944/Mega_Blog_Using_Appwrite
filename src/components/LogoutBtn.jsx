import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {logout} from '../store/authSlice'
function LogoutBtn() {
    const dispatch = useDispatch()
    function logoutHandler(){
        authService.logOut().then(()=>{
            dispatch(logout())
        }).catch((error)=>{
            console.log("LogOutBtn Logout Error " + error)
        })
    }

    return (
        <button onClick={logoutHandler} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>LogoutBtn</button>
    )
}

export default LogoutBtn