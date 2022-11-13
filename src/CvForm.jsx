import React, { useState } from 'react'
import {Formik} from 'formik'
import axios from 'axios'
const CvForm = ({ setFormValues }) => {
    const [errorRes, setErrors] = useState({})
    return (
       <div>
        <Formik
       initialValues={{ firstName: '', lastName: '', email: '', address: '' }}
       onSubmit={(values, { setSubmitting }) => {
        axios.post('http://localhost:4000/cv', values)
            .then(() => setFormValues(values))
            .catch((err) => setErrors(err.response.data))
         setSubmitting(false);
       }}
     >
       {({
         values,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
            <div>
            <label>first name</label>
                <input 
                name='firstName' 
                placeholder='first name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}/>
                {errorRes?.firstName && <span style={{ color: 'red'}}>{errorRes.firstName}</span>}
            </div>
            <div>
            <label>last name</label>
                <input 
                    name='lastName' 
                    placeholder='last name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}/>
                {errorRes?.lastName && <span style={{ color: 'red'}}>{errorRes.lastName}</span>}

            </div>
            <div>
            <label>email</label>
                <input 
                    name='email' 
                    placeholder='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    value={values.email}/>
                {errorRes?.email && <span style={{ color: 'red'}}>{errorRes.email}</span>}

            </div>
            <div>
            <label>address</label>
            <input 
                name='address' 
                placeholder='address'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}/>
                {errorRes?.address && <span style={{ color: 'red'}}>{errorRes.address}</span>}
            </div>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
        
    )
}

export default CvForm


