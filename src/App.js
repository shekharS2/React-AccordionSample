import { useState } from 'react';
import './App.css';
import data from './data.json';

function App() {
	const [selected, setSelected] = useState(null);

	const toggle = (i) => {
		if(selected === i) {
			return setSelected(null);
		}

		setSelected(i);
	}

    return (
        <div className='app-container'>
			<div className='accordian'>
				{
					data.map((item, i) => {
						return <div className='item'>
							<div className='question' onClick={() => toggle(i)}>
								<h2>{item.question}</h2>
								<span>{selected === i ? '-' : '+'}</span>
							</div>
							<div 
								className={
									selected === i ? 'answer show' : 'answer'
								}
							>
								{item.answer}
							</div>
						</div>
					})
				}
			</div>
        </div>
    );
}

export default App;
