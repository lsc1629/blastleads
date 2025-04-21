import MobileMenu from '../MobileMenu';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
      <MobileMenu />
    </div>
  );
};

export default Layout;
