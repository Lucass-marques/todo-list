import styled from 'styled-components'
import variables from '../../styles/variables'

import * as enums from '../../Utils/Enums/tarefa'
import { Button } from '../../styles'

type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  parameter: 'status' | 'priority'
}

function returnBackgroundColor(props: TagProps): string {
  if (props.parameter === 'priority') {
    if (props.priority === enums.Priority.URGENTE) return variables.red
    if (props.priority === enums.Priority.IMPORTANTE) return variables.orange
  } else {
    if (props.status === enums.Status.PENDENTE) return variables.yellow
    if (props.status === enums.Status.CONCLUIDA) return variables.green
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => returnBackgroundColor(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const CancelRemoveButton = styled(Button)`
  background-color: ${variables.red};
`
