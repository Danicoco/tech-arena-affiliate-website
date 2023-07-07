import { RouterProvider } from 'react-router-dom';
import router from './routing/routes';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    </>
  )
}

export default App;
