import { Link, Outlet } from 'react-router-dom';

export default function Wrapper() {
  return (
    <>
      <div>
        <header>
          <h1>A website about stores</h1>
        </header>
        
      <div>
      <Link to="/stores">View all stores</Link>
      </div>
      <Link to="/stores/new">Make a new store</Link>

      <Outlet />
      </div>
    </>
  );
}
