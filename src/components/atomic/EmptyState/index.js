import React from 'react';

import { ICONS } from 'assets/icons'



function EmptyState({text,subtitle}) {
  const style = {
    display : "flex",
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'column',
    height : "100%",
    width: "100%",
    backgroundColor : '#b1afaf1a'
  }

  return (
    <div style={style}>
      <p className="emptyStateTitle"> {text} </p>
      {subtitle && <small>{subtitle}</small>}
      <img src={ICONS.SadFrank} className="sanFrank" alt={'icon'} />
    </div>
  )
} 


export default EmptyState