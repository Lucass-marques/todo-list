import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

import CardFilter from '../../Components/CardFilter'
import * as S from './styles'
import * as enums from '../../Utils/Enums/tarefa'

import { Button, Input } from '../../styles'

type Props = {
  showFilters: boolean
}

const Sidebar = ({ showFilters }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Input
              type="text"
              placeholder="Buscar"
              value={term}
              onChange={(event) => dispatch(changeTerm(event.target.value))}
            />
            <S.Filters>
              <CardFilter
                value={enums.Status.PENDENTE}
                criterion="Status"
                caption="pendentes"
              />
              <CardFilter
                value={enums.Status.CONCLUIDA}
                criterion="Status"
                caption="concluídas"
              />
              <CardFilter
                value={enums.Priority.URGENTE}
                criterion="Priority"
                caption="urgentes"
              />
              <CardFilter
                value={enums.Priority.IMPORTANTE}
                criterion="Priority"
                caption="importantes"
              />
              <CardFilter
                value={enums.Priority.NORMAL}
                criterion="Priority"
                caption="normal"
              />
              <CardFilter criterion="Todas" caption="todas" />
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            Voltar à lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default Sidebar
