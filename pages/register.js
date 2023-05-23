import { useState } from "react";
import Layout from "../components/layout";
import {useRouter} from "next/navigation"
import styles from "../styles/register.module.css"
import axios from "axios"

const Register = () => {

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const {push} = useRouter()


    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password == confirmPassword){
            const confirm = await register(name, mail, password)
            console.log(name, password, password);
            console.log(confirm);
            push("/login")
        }
        else{
            console.log("The passwords do not match");
        }
    }

    const register = async (username, email, password) => {
        const {data} = await axios.post('http://localhost:8698/registerUser', {username, email, password})
        return data 
    }

    return (
        <Layout>
            <h1 className={styles.centerReg}>
                Register
            </h1>
            <form onSubmit={handleSubmit} className={styles.centerReg}>
                <div>
                    <input className={`rounded ${styles.inputPlace}`} value={name} onChange={(e) => setName(e.target.value)} placeholder="User" />
                </div>
                <div>
                    <input className={`rounded ${styles.inputPlace}`} value={mail} onChange={(e) => setMail(e.target.value)} placeholder="Email" />
                </div>
                <div>
                    <input className={`rounded ${styles.inputPlace}`} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <div>
                    <input className={`rounded ${styles.inputPlace}`} type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" />
                </div>
                <div>
                    <button className="rounded">Register</button>
                </div>
            </form>
        </Layout >
    );
}

export default Register;
