import logo from "../assets/logo.png"

export default function Header(){
    return (
        <header>
            <img src={logo} alt="logo image"/>
            <h1>Chef GPT</h1>
        </header>
    )
}