import AuthProvider from './providers/AuthProvider';
import AppRouter from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <AppRouter />;
      </AuthProvider>
    </>
  );
}

export default App;
