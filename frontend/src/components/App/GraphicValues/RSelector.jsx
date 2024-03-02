import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';

import { Dropdown } from 'primereact/dropdown';
import { Message } from 'primereact/message';
import { drawBeginnigGraph } from "../../../Pages/src/js/canvas"

export default function RSelector({ selectedR, setSelectedR, isCorrectR, setIsCorrectR }) {
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
		if (!values.includes(e)) {
			setIsCorrectR(false)
		} else {
			drawBeginnigGraph("canvas")
			setIsCorrectR(true)
		}
	}

	return (
		<>
			<div className="card mt-2 mb-2">

			<h4>Choose R:</h4>

			<Button value={selectedR} label='-4.0' onClick={(e)=>{
				handleChange(values[0])
				setSelectedR(values[0])}}/>

			<Button value={selectedR}  label='-3.0' onClick={(e)=>{
				handleChange(values[1])
				setSelectedR(values[1])}}/>

			<Button value={selectedR}  label='-2.0' onClick={(e)=>{
				handleChange(values[2])
				setSelectedR(values[2])}}/>
			<Button value={selectedR}  label='-1.0' onClick={(e)=>{
				handleChange(values[3])
				setSelectedR(values[3])}}/>		
			<Button value={selectedR}  label='0.0' onClick={(e)=>{
				handleChange(values[4])
				setSelectedR(values[4])}}/>			
			<Button value={selectedR} label='1.0' onClick={(e)=>{
				handleChange(values[5])
				setSelectedR(values[5])}}/>
			<Button value={selectedR}  label='2.0' onClick={(e)=>{
				handleChange(values[6])
				setSelectedR(values[6])}}/>
			<Button value={selectedR}  label='3.0' onClick={(e)=>{
				handleChange(values[7])
				setSelectedR(values[7])}}/>
			<Button value={selectedR}  label='4.0' onClick={(e)=>{
				handleChange(values[8])
				setSelectedR(values[8])}}/>
			</div>
			{
				!isCorrectR &&
				<Message className='mb-2' severity="error" text="Passed R don't belong availible values" />
			}
		</>
	);
}

RSelector.propTypes = {
	setSelectedR: PropTypes.func.isRequired,
	setIsCorrectR: PropTypes.func.isRequired,
};
