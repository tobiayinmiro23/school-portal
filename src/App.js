import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import {DashboardLayout,ErrorBoundary,UserContext,Congratulations,SignUp,AddCourse,Department,Login,CourseReg,Result,SchoolCalendar,Dashboard,LectureTimeTable,MissedSession,Resource,PortalFeedBack,ChangePassword} from './AllFiles';
import './App.css';
function App() {
  const router = createBrowserRouter([
    {
      path: '/Login',
      element: <Login />
    },
    {
      path: '/',
      element: <SignUp />
    },
    {
      path: '/Congratulations',
      element: <Congratulations />
    },
    {
      path: '/DashBoard',
      element:  <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: 'Result',
          element: <Result/>,
        },
        {
          path: 'CourseReg',
          element: <AddCourse/>,
        },
        {
          path: 'RegisteredCourse',
          element: <CourseReg/>,
        },
        {
          path: 'Department',
          element: <Department/>,
        },
        {
          path: 'Resource',
          element: <Resource/>,
        },
        {
          path: 'LectureTimeTable',
          element: <LectureTimeTable/>,
        },
        {
          path: 'SchoolCalendar',
          element: <SchoolCalendar/>,
        },
        {
          path: 'MissedSession',
          element: <MissedSession/>,
        },
        {
          path: 'PortalFeedBack',
          element: <PortalFeedBack/>,
        },
        {
          path: 'PortalFeedBack',
          element: <PortalFeedBack/>,
        },
        {
          path: 'ChangePassword',
          element: <ChangePassword/>,
        },
      ],
    },
    {
      path: '*',
      element: <SignUp />
    },
  ]);

  return (
    <div className="App">
       <ErrorBoundary fallback='there was an error, please try again later' >
          <UserContext >
              <RouterProvider router={router} />
            </UserContext>
       </ErrorBoundary>
    </div>
  );
}

export default App;
