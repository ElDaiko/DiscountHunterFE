import { useState, useEffect } from "react"
import Layout from "../components/layout"
import styles from "../styles/login.module.css"
import Link from 'next/link'
import {useRouter} from "next/navigation"
import axios from "axios"

const Login = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const {push} = useRouter()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = await login(name, password)
        localStorage.setItem("token", token.token)  //Se maneja en el almacenamiento local el usuer
        push("/")
    }

    const login = async (email, password) => {
        const {data} = await axios.post('http://localhost:8698/signInUser', {email, password})
        return data 
    }

    const logValidation = () => {
        const storedToken = localStorage.getItem("token")
        if(storedToken != null){
            push("/")
        }
    }

    useEffect(() => {
        logValidation()
    }, []);    

    return (
        <Layout>
            <h1 className={styles.centerLog}>
                Login
            </h1>
            <form onSubmit={handleSubmit} className={styles.centerLog}>
                <div>
                    <input className={`rounded ${styles.inputPlace}`} value={name} onChange={(e) => setName(e.target.value)} placeholder="Email" />
                </div>
                <input className={`rounded ${styles.inputPlace}`} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <div>
                    <button className="rounded">Login</button>
                </div>
            </form>
            <p className={styles.centerLog}>
                <Link className={styles.title} href="/register">Don´t have an account yet?</Link>
            </p>

        </Layout >
    );
}

export default Login;
