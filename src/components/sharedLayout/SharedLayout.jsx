import { Outlet, Link } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default SharedLayout;
