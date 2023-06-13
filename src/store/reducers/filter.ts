import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as enums from '../../Utils/Enums/tarefa'

type FilterState = {
  term?: string
  criterion: 'Priority' | 'Status' | 'Todas'
  value?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  term: '',
  criterion: 'Todas'
}

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.criterion = action.payload.criterion
      state.value = action.payload.value
    }
  }
})

export const { changeTerm, changeFilter } = FilterSlice.actions

export default FilterSlice.reducer
