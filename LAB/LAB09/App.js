import './App.css';
import { Routes, Route, Outlet, Link, useParams, useSearchParams, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function App() {
  return (
    <div className="App">
        <h2>Welcome to NTUT Web Programming</h2>
        <Sidebar>
        <Menu>
            <MenuItem routerLink={<Link to="/"/>}> Home </MenuItem>
            <MenuItem routerLink={<Link to="search"/>}> Search </MenuItem>
        </Menu>
        </Sidebar>
  <Routes>
    <Route index element={<Home />} />
    <Route path="search" element={<Search />} />
    <Route path="*" element={<NoMatch />} />
  </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search?term">Search</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Title(){
  return(
    <div>
    <h2>Welcome to NTUT Web Programming</h2>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>This is our home!</h1>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>No Searching Result</h2>
      <p>
        <Link to="/">Go Back to Home</Link>
      </p>
    </div>
  );
}

function Search() {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    navigate('/search')
  };

  return (
    <div>
      <h1>Your search term : {searchParams.get('query')}</h1>
      <form onSubmit={handleSubmit}>
      <label for="searchterm">Search : </label>
        <input name="query"/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
