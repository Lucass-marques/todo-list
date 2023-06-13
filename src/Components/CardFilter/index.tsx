import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { changeFilter } from '../../store/reducers/filter'
import * as enums from '../../Utils/Enums/tarefa'
import { RootReducer } from '../../store'

export type Props = {
  caption: string
  criterion: 'Priority' | 'Status' | 'Todas'
  value?: enums.Priority | enums.Status
}

const CardFilter = ({ caption, criterion, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const isActiveVerifier = () => {
    const sameCriterion = filter.criterion === criterion
    const sameValue = filter.value === value

    return sameCriterion && sameValue
  }

  const taskCounter = () => {
    if (criterion === 'Todas') return tasks.itens.length
    if (criterion === 'Priority') {
      return tasks.itens.filter((item) => item.priority === value).length
    }
    if (criterion === 'Status') {
      return tasks.itens.filter((item) => item.status === value).length
    }
  }

  const filtering = () => {
    dispatch(
      changeFilter({
        criterion,
        value
      })
    )
  }

  const counter = taskCounter()
  const active = isActiveVerifier()

  return (
    <S.Card active={active} onClick={filtering}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{caption}</S.Label>
    </S.Card>
  )
}

export default CardFilter
