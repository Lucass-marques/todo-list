import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../Models/Task'
import * as enums from '../../Utils/Enums/tarefa'

type TasksState = {
  itens: Task[]
}

const initialState: TasksState = {
  itens: [
    {
      id: 1,
      description: 'Estudar TypeScript revendo o exercício do módulo 7',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDA,
      title: 'Estudar TypeScript'
    },
    {
      id: 2,
      description: 'Estudar material de apoio',
      priority: enums.Priority.NORMAL,
      status: enums.Status.PENDENTE,
      title: 'Estudar JavaScript'
    },
    {
      id: 3,
      description: 'Praticar a construção de uma landing page',
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.PENDENTE,
      title: 'Estudar Bootstrap'
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((task) => task.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.itens.findIndex((t) => t.id === action.payload.id)

      if (taskIndex >= 0) {
        state.itens[taskIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const taskAlreadyExists = state.itens.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (taskAlreadyExists) {
        alert('Já existe uma tarefa com este nome')
      } else {
        const lastTask = state.itens[state.itens.length - 1]

        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.itens.push(newTask)
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; finished: boolean }>
    ) => {
      const taskIndex = state.itens.findIndex((t) => t.id === action.payload.id)

      if (taskIndex >= 0) {
        state.itens[taskIndex].status = action.payload.finished
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remove, edit, register, changeStatus } = tasksSlice.actions

export default tasksSlice.reducer
