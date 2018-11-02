import React from 'react'
import styled from 'styled-components'

import { Card } from '../card'

const BoardLayout = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  -webkit-box-align: start;
  
  height: 100%;
  
  border: 1px solid gray;
  
  & > *:not(:last-child) {
    margin-right: 16px;
    margin-bottom: 16px;
  }
`

export const Board = ({ cards }) => (
  <BoardLayout>
    {cards.map((card, idx) => (
      <Card key={idx} size={card.size}>{card.text}</Card>
    ))}
  </BoardLayout>
)
