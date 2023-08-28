import Spinner from './components/ui/Spinner';
import { useLoading } from './contexts/LoadingContext';
import Router from './route/Router';
import { ToastContainer } from 'react-toastify';

function App() {
  const { loading } = useLoading();

  return (
    <div className="App">
      {loading && <Spinner />}
      <Router />
      <ToastContainer autoClose={20000} theme="colored" position="top-center" />
    </div>
  );
}

export default App;
