import React, { useState } from 'react'
import App from './App'

import sqldata from './data/db.json'

export default function Global() {
  const [leng, setLeng] = useState("kr");
  const globaldata = sqldata[leng];
  return (
    <div>
        <App data={globaldata} leng={leng}  />
    </div>
  )
}
