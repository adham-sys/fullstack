import Header from '../component/header';
import Footer from '../component/footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
    
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;