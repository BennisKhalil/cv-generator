import React from 'react'

const CvView = ({ formValues }) => {

    return (
        <div>
           <div>
                <span>first name:  </span>
                <span>{formValues.firstName}</span>
            </div>
            <div>
                <span>last name:  </span>
                <span>{formValues.lastName}</span>
            </div>
            <div>
                <span>email:  </span>
                <span>{formValues.email}</span>
            </div>
            <div>
                <span>address:  </span>
                <span>{formValues.address}</span>
            </div> 
        </div>
    )
}

export default CvView