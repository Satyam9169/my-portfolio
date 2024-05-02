import Navigation from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import { createBrowserRouter, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

    ]
  }
])

export default appRouter

// export default appRouter 