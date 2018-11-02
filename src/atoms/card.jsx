import React from 'react'
import styled from 'styled-components'
import styledMap from 'styled-map'

export const Card = styled.article`
  min-width: 136px;
  max-width: 136px;
  min-height: 136px;
  max-height: 136px;
  padding: 4px 8px;
    
  background: #FFFDD6;
  box-shadow: 0 2px 4px 0 rgba(130,130,130,0.37);

  font-family: var(--font-base);
  color: #303030;
  text-align: left;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  
  font-size: ${styledMap('size', {
  default: '18px',
  small: '14px',
  tiny: '13px'
})};
  
  line-height: ${styledMap('size', {
  default: '20px',
  small: '20px',
  tiny: '20px'
})};
  
  font-weight: ${styledMap('size', {
  default: 400,
  small: 400,
  tiny: 400
})};
`
