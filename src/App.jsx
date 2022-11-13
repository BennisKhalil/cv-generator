import { useState } from 'react'
import CvForm from './CvForm'
import CvView from './CvView'

function App() {
  const [formValues, setFormValues] = useState(undefined)
  return (
    <div>
      {!formValues && <CvForm setFormValues={setFormValues}/>}
      {formValues && <CvView formValues={formValues}/>}
    </div>
  )
}

export default App
