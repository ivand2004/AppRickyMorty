import { useState } from "react"
import validate from "./validation";
import s from "./Form.css"

export default function Form(props){
    const [userData, setUserData] = useState({username: "", password: ""});
    const [errors, setErrors] = useState({});

    function handleInputChange(e){
        setUserData({...userData, [e.target.name] : e.target.value})
        setErrors(validate({...userData, [e.target.name] : e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.login(userData);
    }

    return <div className="formDiv">
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" placeholder="Username" name="username" value={userData.username} onChange={handleInputChange}/>
        <p>{errors.username}</p>
        <label htmlFor="password">Password: </label>
        <input type="password" placeholder="Password" name="password" value={userData.password} onChange={handleInputChange}/>
        <p>{errors.password}</p>
        <button type="submit">LOGIN</button>
        </form>
    </div>
}