import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Sidebar from './Containers/Aside'
import ToDoList from './Containers/ToDoList'
import GlobalStyle, { Container } from './styles'

import store from './store'
import Home from './Pages/Home'
import Register from './Pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Register />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={router} />
        {/*  */}
      </Container>
    </Provider>
  )
}

export default App
