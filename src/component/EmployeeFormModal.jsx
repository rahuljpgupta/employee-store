import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

//This modal can be used for both Add as well as Edit functionality. 
//TODO: Add foem validations, Date picker
export default function EmployeeFormModal({ tableDefinition, handleAddEmployee }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '',
      dob: '',
      designation: '',
      profilePhoto: '',
      experience: '',
    }
  )

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = () => {
    handleAddEmployee(formData);
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      designation: '',
      profilePhoto: '',
      experience: '',
    });
    handleClose();
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>Add Employee Form</div>
      <div>
        {tableDefinition.map(item => (
          <div>
            <label for={item.columnName}>{item.columnName}: </label>
            <input
              type="text"
              id={item.columnName}
              name={item.columnName}
              value={formData[item.columnName]}
              onChange={handleInputChange}
            />
            {/* //TODO: Add date picker for DOB */}
          </div>
        ))}
        <button onClick={handleSubmit}>Submit</button>
      </div> 
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add Employee
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}