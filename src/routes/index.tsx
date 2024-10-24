import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import {
  Base,
  HomePage,
  Login,
  ProjectDetail,
  ProjectManagementPage,
  TaskManagement,
  Timeline,
} from '../pages';

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Base />,
    children: [
      {
        element: <HomePage />,
        index: true,
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
            path: 'timeline',
            element: <Timeline />,
          },
          {
            path: ':projectId',
            element: <ProjectDetail />,
          },
        ],
      },
    ],
  },
];

// const authenticatedRoutes: RouteType[]  = [];

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
