import 'normalize.css';
import "./App.css";
import Image from "./reactLogo_noBackground-transformed.png"

function App() {
  return (
    <div className="App">
       <header>
        <nav>
          <img src={Image} width='100px' alt='logo'/>
          <ul className='list-container'>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">about</a></li>
            <li><a href="/">contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="Wrapper">
     
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
      </div>
      <footer>
        <small>© 2021  development. All rights reserved.</small>
      </footer>
    
    </div>
  
  );
}

export default App;
