import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '../lib/apollo-provider';
import { routes } from './routes';

const App = (): JSX.Element => {
    const router = createBrowserRouter(routes);

    return (
        <ApolloProvider>
            <RouterProvider router={router} />
        </ApolloProvider>
    );
};
export default App;
