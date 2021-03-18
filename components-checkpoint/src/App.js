import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FullName from "./Component/Profile/FullName";
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import Adress from "./Component/Profile/Adress";
function App() {
    return (
        <div>
            <header>
                <h1>Welcome to my React Components Checkpoint</h1>
            </header>
            <div className="App">
                <br />
                <ProfilPhoto />
                <br />
                <FullName />
                <br />
                <Adress />
            </div>
            <footer></footer>
        </div>
    );
}

export default App;
