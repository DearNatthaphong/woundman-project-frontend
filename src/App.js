import Spinner from './components/ui/Spinner';
import { useLoading } from './contexts/LoadingContext';
import Router from './route/Router';
import { ToastContainer } from 'react-toastify';

function App() {
  const { loading } = useLoading();

  // if (loading) {
  //   return <Spinner/>
  // }

  return (
    <div className="App">
      {loading && <Spinner />}
      <Router />
      <ToastContainer
        autoClose={6000}
        theme="colored"
        position="bottom-center"
      />
    </div>
  );
}

export default App;
