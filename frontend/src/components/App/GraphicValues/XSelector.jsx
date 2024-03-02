import { useState } from 'react';
import PropTypes from 'prop-types';
import {
    ToggleButton,
    ToggleButtonGroup,
} from "@mui/material";
import { Dropdown } from 'primereact/dropdown';
import { Message } from 'primereact/message';
import { Button } from 'primereact/button';

export default function XSelector({ selectedX, setSelectedX, isCorrectX, setIsCorrectX }) {
	const values = [
		{ name: '-4.0' },
		{ name: '-3.0' },
		{ name: '-2.0' },
		{ name: '-1.0' },
		{ name: '0.0' },
		{ name: '1.0' },
		{ name: '2.0' },
		{ name: '3.0' },
		{ name: '4.0' },
	];
	

	function handleChange(e) {
		console.log("test func")
		console.log(e)
		if (!values.includes(e)) {
			setIsCorrectX(false)
		} else {
			setIsCorrectX(true)
		}
	}


	function handleClick(){
	}

	return (
		<>
			<div className="card my-2">
			<h4>Choose X: </h4>
			<Button value={selectedX} label='-4.0' onClick={(e)=>{
				handleChange(values[0]);
				setSelectedX(values[0]);
				handleClick();
			}}/>

			<Button value={selectedX}  label='-3.0'
			  onClick={(e)=>{
				handleChange(values[1])
				setSelectedX(values[1])
				handleClick();
			}}/>

			<Button value={selectedX} label='-2.0' onClick={(e)=>{
				handleChange(values[2])
				setSelectedX(values[2])
				handleClick();
			}}/>
			<Button value={selectedX}  label='-1.0' onClick={(e)=>{
				handleChange(values[3])
				setSelectedX(values[3])
				handleClick();
			}}/>		
			<Button value={selectedX}  label='0.0' onClick={(e)=>{
				handleChange(values[4])
				setSelectedX(values[4])
				handleClick();
			}}/>			
			<Button value={selectedX} label='1.0' onClick={(e)=>{
				handleChange(values[5])
				setSelectedX(values[5])
				handleClick();
			}}/>
			<Button value={selectedX} label='2.0' onClick={(e)=>{
				handleChange(values[6])
				setSelectedX(values[6])
				handleClick();
			}}/>
			<Button value={selectedX}   label='3.0' onClick={(e)=>{
				handleChange(values[7])
				setSelectedX(values[7])
				handleClick();
			}}/>
			<Button value={selectedX} label='4.0' onClick={(e)=>{
				handleChange(values[8])
				setSelectedX(values[8])
				handleClick();
			}}/>
			</div>
			{	
				!isCorrectX &&
				<Message className='Xerror' severity="error" text="Passed X don't belong availible values" />
			}
		</>
	);
}

XSelector.propTypes = {
	setSelectedX: PropTypes.func.isRequired,
	setIsCorrectX: PropTypes.func.isRequired,
};
