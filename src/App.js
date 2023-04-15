import "./App.css";
import Image from "./download.png"

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={Image} width='40px' alt='logo'/>
        </nav>
      </header>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
      <footer>
        <small>© 2021 Ziroll development. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
