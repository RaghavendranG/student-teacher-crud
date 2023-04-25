import React, { useContext } from 'react'
import { context } from '../../App'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import Base from '../../Base/Base'
import { useHistory } from "react-router-dom";

const TeacherList = () => {

    const {teacherData, setTeacherData} = useContext(context)
    const history = useHistory()

    const removeData = (id) => {
        const deletedData = teacherData.filter((items, idx) => idx !== id)
        
        setTeacherData(deletedData)
            }

  return (
    <Base
    title="Teachers List"> 
    <div className="add-btn">
<Button variant='contained' className='btn' onClick={() => history.push('/add-teacher')}>Add Teacher</Button>
</div>
<div className='studentList'>
{teacherData.map((items, key) => (
    <Card sx={{ maxWidth: 345 }} key={key} className='card'>
      <CardContent className='CardContent'>
        <Typography gutterBottom variant="h5" component="div">
          Fist Name : {items.firstname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last Name : {items.lastname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Department : {items.department}
        </Typography>
      </CardContent>
      <CardActions className='card-btn'>
        <Button size="small" variant='contained' color='secondary' onClick={() => history.push(`/edit-teacher/${key}`)}>Edit</Button>
        <Button size="small" variant='contained' color='error' onClick={() => removeData(key)}>Delete</Button>
        <Button size="small" variant='contained' color='success' onClick={() => history.push(`/view-teacher/${key}`)}>View</Button>
      </CardActions>
    </Card>
))}
</div>
    </Base>
  )
}

export default TeacherList