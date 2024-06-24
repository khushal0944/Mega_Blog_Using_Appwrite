import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from './appwrite/auth'
import { login, logout } from "./store/authSlice"
import { Footer, Header } from "./components"

export default function App() {
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    useEffect(()=>{
        authService.getCurrentUser()
        .then((userData) => {
            if(userData) dispatch(login(userData))
            else dispatch(logout())
        })
        .finally(() => setLoading(false))
    },[])

	return !loading ? (
        <div className="min-h-screen">
            <div className="h-screen">
                <Header />
                <Footer />
            </div>
        </div>
    ) : null
}
