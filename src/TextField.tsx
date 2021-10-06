import React from 'react'

interface Props {
   name: string
}

function TextField(props: Props) {
   return <div>{props.name}</div>
}

export default TextField
