import React from 'react';
import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
	KeyboardTimePicker
} from '@material-ui/pickers'
import { Grid, TextField } from '@material-ui/core';
import { Container } from '@material-ui/core';


const FormCitation = () => {

const [selectedDate1, setSelectedDate1] = React.useState(
	new Date( "2022-03-30T12:00:00" )
)

const handleDateChange1 = (date) => {
	setSelectedDate1(date)
}

const [selectedDate2, setSelectedDate2] = React.useState(
	new Date( "2022-03-30T12:00:00" )
)

const handleDateChange2 = (date) => {
	setSelectedDate2(date)
}

/* const [maxQuota, setMaxQuota] = React.useState("");
const [textError, setTextError] = React.useState("");
const [errorQuota, setErrorQuota] = React.useState(false); */

  return (
	<>
		<div>Nueva citación</div>
<Container>

<Grid>
<div className="row mt-4">
    <div className="col-12 col-md-6">
		<label htmlFor='' className="form-label">Fecha de inicio de la citacion</label>
<MuiPickersUtilsProvider utils={DateFnsUtils}>
	<KeyboardDatePicker
	variant='dialog'
	format='MM/dd/yyyy'
	id= 'citationDateStart'
	label='Selecciona la fecha'
	value={selectedDate1}
	onChange={handleDateChange1}
	KeyboardButtonProps={{
		'aria-label': 'change date'
	}}
	className="form-control"
	/>
	</MuiPickersUtilsProvider>
</div>
<div className="col-12 col-md-6">
	<label htmlFor='' className="form-label">Hora de inicio de la citacion</label>
	<MuiPickersUtilsProvider utils={DateFnsUtils}>
	<KeyboardTimePicker
		id='citationStartTime'
		label='Selecciona la hora de inicio'
		value={selectedDate1}
		onChange={handleDateChange1}
		KeyboardButtonProps={{
			'aria-label': 'change date'
		}}
		className="form-control"
		/>
</MuiPickersUtilsProvider>
</div>
</div>
<div className="row mt-4">
    <div className="col-12 col-md-6">
		<label htmlFor='' className="form-label">Fecha de finalización de la citacion</label>
<MuiPickersUtilsProvider utils={DateFnsUtils}>
	<KeyboardDatePicker
	variant='dialog'
	format='MM/dd/yyyy'
	id= 'citationDateEnd'
	label='Selecciona la fecha'
	value={selectedDate2}
	onChange={handleDateChange2}
	KeyboardButtonProps={{
		'aria-label': 'change date'
	}}
	className="form-control"
	/>
	</MuiPickersUtilsProvider>
</div>
<div className="col-12 col-md-6">
	<label htmlFor='' className="form-label">Hora de finalización de la citacion</label>
	<MuiPickersUtilsProvider utils={DateFnsUtils}>
	<KeyboardTimePicker
		id='citationEndTime'
		label='Selecciona la hora de inicio'
		value={selectedDate2}
		onChange={handleDateChange2}
		KeyboardButtonProps={{
			'aria-label': 'change date'
		}}
		className="form-control"
		/>
</MuiPickersUtilsProvider>
</div>
</div>
<div className="row mt-4">
    <div className="col-12 col-md-6">
	<label htmlFor='' className="form-label">Convocatoria</label>
<TextField
          id="outlined-multiline-flexible"
          label="Convocatoria"
          maxRows={4}
		  className="form-control"
/*           value={value}
          onChange={handleChange} */
        />
</div>
<div className="col-12 col-md-6">
<label htmlFor='' className="form-label">Número máximo de cupos</label>
<TextField
/* 	onChange={(e) => } */
    id="outlined-multiline-flexible"
    label="Indica # de cupos"
    maxRows={4}
	className="form-control"
/*         value={value}
    onChange={handleChange} */
        />
</div>
</div>
<div className="row mt-6">
    <div className="col-12 col-md-12">
<label htmlFor='' className="form-label">Notas</label>
<TextField
          id="notes"
          label="Notas aclaratorias"
          multiline
          rows={6}
		  className="form-control"
        />
</div>
</div>
</Grid>
	</Container>
	</>
  )
}

export default FormCitation