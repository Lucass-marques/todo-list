import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer, SaveButton, Title } from '../../styles/index'
import { Input } from '../../styles'
import { Formu, Options, Optione } from './styles'
import * as enums from '../../Utils/Enums/tarefa'
import { register } from '../../store/reducers/tasks'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const registerTask = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      register({
        title,
        priority,
        description,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova Tarefa</Title>
      <Formu onSubmit={registerTask}>
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Título"
        />
        <Input
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((Priority) => (
            <Optione key={Priority}>
              <input
                value={Priority}
                name="prioridade"
                type="radio"
                onChange={(event) =>
                  setPriority(event.target.value as enums.Priority)
                }
                id={Priority}
                defaultChecked={Priority === enums.Priority.NORMAL}
              />{' '}
              <label htmlFor={Priority}>{Priority}</label>
            </Optione>
          ))}
        </Options>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </Formu>
    </MainContainer>
  )
}

export default Form
