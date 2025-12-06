import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from "./layouts/AppLayout"
import LandingPage from "./pages/landingPage"
import OnBoarding from "./pages/onBoarding"
import JobListing from "./pages/job-listing"
import PostJob from "./pages/PostJob"
import SavedJobs from "./pages/SavedJobs"
import MyJobs from "./pages/MyJobs"
import './App.css'
import { ThemeProvider } from "./components/theme-provider"

const router = createBrowserRouter([
  {

    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: "/onboarding",
        element: <OnBoarding />
      },
      {
        path: "/jobs",
        element: <JobListing />
      },
      {
        path: "/job/:id",
        element: <OnBoarding />
      },
      {
        path: "/post-job",
        element: <PostJob />
      },
      {
        path: "/saved-job",
        element: <SavedJobs />
      },
      {
        path: "/my-jobs",
        element: <MyJobs />
      }
    ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App