import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollRestoration />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
