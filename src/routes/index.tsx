import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import ProjectManagementPage from '../pages/ProjectManagementPage';
import TaskManagement from '../pages/TaskManagement';
import ProjectDetail from '../pages/ProjectDetail';

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: 'project-management',
    element: <ProjectManagementPage />,
    children: [
      {
        element: <TaskManagement />,
        index: true,
      },
      {
        path: ':projectId',
        element: <ProjectDetail />,
      },
    ],
  },
];

// const authenticatedRoutes: RouteType[] = [];

const unauthenticatedRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
];

const AppRouter = (): React.ReactElement => {
  // const { token } = useAuth();

  const router = createBrowserRouter([
    ...publicRoutes,
    ...unauthenticatedRoutes,
    // ...(token ? authenticatedRoutes : unauthenticatedRoutes),
    {
      path: '*',
      element: <Navigate to="/404" />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
