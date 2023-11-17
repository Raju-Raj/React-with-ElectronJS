import React from 'react'
import TodoForm from '../components/forms/TodoForm';

const Work:React.FC = () => {
  const electron = (window as any).electron;
  return (
    <div>

      This is Work Conetnt<br/>

   the home directory is @{electron.homeDir()}<br/>

   the Arch directory is @{electron.arch()}<br/>

   the Os directory is @{electron.osVersion()}

   <TodoForm/>

    </div>
  )
}

export default Work