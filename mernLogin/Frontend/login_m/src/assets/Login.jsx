import React from 'react'

const Login = () => {
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    function handleSubmit(e){
        e.preventDefault();
        console.log("form submitted",email,password);
    }
  return (
    <div>
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={e=>setEmail(e.target.value)} /> <br />
                <label htmlFor="password">password</label>
                <input type="password" id="password" name="password" required onChange={e=>setPassword(e.target.value)}/>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
      
    </div>
  )
}

export default Login
