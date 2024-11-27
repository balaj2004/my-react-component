import "./App.css"
import Content from "./components/content"
import Header from "./components/header";
import Footer from "./components/footer"
import Greeting from "./components/greeting"
function App(){
    return (
        <div className="App">
            <Header />
            <Greeting />
            <Content />
            <Footer/>
        </div>

    )
}
export default App;