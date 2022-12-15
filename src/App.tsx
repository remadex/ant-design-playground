import { Toaster } from 'react-hot-toast';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header';
import Order from './pages/dashboard/Order';
import Profile from './pages/dashboard/Profile';
import Login from './pages/Login';

const { Content } = Layout;

const App = () => (
  <Router>
    <div className="bg-background flex flex-col px-4 py-3 min-h-screen">
      <Header />
      <main className="container flex-grow p-8">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </main>
      <Toaster
        position="bottom-left"
        toastOptions={{ duration: 2000, className: 'toastStyle' }}
      />
    </div>
  </Router>
);

export default App;
