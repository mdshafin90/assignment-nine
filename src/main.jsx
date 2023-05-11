import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Blog from './components/Blog/Blog.jsx';
import Main from './components/Layout/Main.jsx';
import CompanyDetails from './components/CompanyDetails/CompanyDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "job",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "detail/:detailId",
        element: <CompanyDetails></CompanyDetails>,
        loader: ({ params }) => fetch('/companyData.json').then(res => res.json()).then(datas => datas.find(data => data.id == params.detailId))
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
