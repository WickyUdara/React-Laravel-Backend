import {Link} from "react-router-dom";
export default function Login(){
    const onSubmit=(e)=>{
        e.preventDefault()
    }

    return(
        
        <form action="" onSubmit={onSubmit}>
            <h1 className="title">
                Login
            </h1>
            <input type="email"placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="btn btn-block">Login</button>
            <p className="message">
                Not Registered? <Link to="/signup">Create an account</Link>
            </p>
        </form>
        
    )
}