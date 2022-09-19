import React, { useState } from 'react'

function Toggle() {
    const [visible, setVisible]=useState(false);
  return (
    <div>
      {visible && <div> I'm visible </div>}
      <button type="button" class="btn btn-secondary" onClick={()=>{setVisible(!visible);}}>Toggle</button>
    </div>
  )
}

export default Toggle;
