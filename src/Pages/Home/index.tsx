import AddButton from '../../Components/AddButton'
import Sidebar from '../../Containers/Aside'
import ToDoList from '../../Containers/ToDoList'

const Home = () => (
  <>
    <Sidebar showFilters />
    <ToDoList />
    <AddButton />
  </>
)

export default Home
