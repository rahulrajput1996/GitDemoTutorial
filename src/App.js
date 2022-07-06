import logo from './logo.svg';
import './App.css';



let myname = "rahul kumar singh rajput"
function App() {
  return (
    <>
      <nav>
        <h1>this is my heading</h1>


        <div className="blank">
          <ul>Home</ul>
          <ul>Services</ul>
          <ul>About</ul>
          <ul>Contact us</ul>
          <h1>Hello to {myname} </h1>
        </div>
      </nav>


      <navbar />

      <img src="" alt="" />

      <div className='container'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quidem veritatis sint suscipit placeat, accusamus nisi. Vel quas quasi voluptatem repudiandae voluptate quos vero suscipit mollitia accusamus autem nobis voluptatum, eius error. Blanditiis animi quasi esse quae, neque harum numquam reiciendis magnam! Minima consequuntur odit excepturi quia voluptate cumque repellat eaque voluptas assumenda neque, eos reprehenderit dicta obcaecati possimus officia dolorum ea itaque porro, fugit natus repudiandae atque. Doloribus in modi reprehenderit, delectus dolor beatae architecto consectetur officia commodi quasi earum mollitia. Explicabo sequi cupiditate, in quam nostrum doloribus dicta minima adipisci, dignissimos iste vel mollitia, ipsam similique aliquid sint.</div>

      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with rahul
          </a>
        </header>
      </div> */}
    </>

  );
}

export default App;
