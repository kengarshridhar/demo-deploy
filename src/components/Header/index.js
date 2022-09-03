// import './App.css';

function Header(manuItem){
    return (
        <p> {manuItem.Home}</p>,
        <p> {manuItem.Car_Service}</p>,
        <p> {manuItem.Contact}</p>,
        <p> {manuItem.About}</p>,
        <p> {manuItem.Feedback}</p>
    );
}

const manuItem = {
    Home: "#",
    Car_Service: "#",
    Contact: "#",
    About: "#",
    Feedback: "#"};

export default Header;