import React from 'react';
import SubTile from './SubTile';


const SubTileAcademic= ({color, degree, description, endDate, institution, startDate})=>{
    return(
        <SubTile
        color={color}
        company={degree}
        jobTitle={institution}
        startDate={startDate}
        endDate={endDate}
        jobDescription={description}
     />
    )
}

export default SubTileAcademic;