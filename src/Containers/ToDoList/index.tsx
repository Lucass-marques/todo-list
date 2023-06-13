import { useSelector } from 'react-redux'

import ToDo from '../../Components/ToDo'
import { MainContainer, Title } from '../../styles/index'

import { RootReducer } from '../../store'

const ToDoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const taskFilter = () => {
    let filteredTasks = itens
    if (term !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (criterion === 'Priority') {
        filteredTasks = filteredTasks.filter((item) => item.priority === value)
      } else if (criterion === 'Status') {
        filteredTasks = filteredTasks.filter((item) => item.status === value)
      }

      return filteredTasks
    } else {
      return itens
    }
  }

  const showFilterResult = (amount: number) => {
    let message = ''
    const complementation =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''

    if (criterion === 'Todas') {
      message = `${amount} tarefa(s) encontrada(s) como: todas ${complementation}`
    } else {
      message = `${amount} tarefa(s) encontrada(s) como: "${`${value}`}" ${complementation}`
    }

    return message
  }

  const tasks = taskFilter()
  const message = showFilterResult(tasks.length)

  return (
    <MainContainer>
      <Title as="p">{message}</Title>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <ToDo
              id={t.id}
              description={t.description}
              title={t.title}
              status={t.status}
              priority={t.priority}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ToDoList
