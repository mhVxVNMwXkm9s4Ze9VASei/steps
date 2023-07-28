import { useState } from "react";

const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];

export default function App() {
	return (
		<div>
			<Steps />
			{/* <Steps /> */}
		</div>
	);
}

function Steps() {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	function handleNext() {
		setStep((step) => (step < messages.length ? step + 1 : step));
	}

	function handlePrevious() {
		setStep((step) => (step > 1 ? step - 1 : step));
	}

	return (
		<div>
			<button
				className="close"
				onClick={() => setIsOpen((isOpen) => !isOpen)}
			>
				&times;
			</button>
			{isOpen && (
				<div className="steps">
					<div className="numbers">
						<div className={step >= 1 ? "active" : ""}>1</div>
						<div className={step >= 2 ? "active" : ""}>2</div>
						<div className={step >= 3 ? "active" : ""}>3</div>
					</div>
					<StepMessage step={step}>{messages[step - 1]}</StepMessage>
					<div className="buttons">
						<Button
							onClickHandler={handlePrevious}
							styling={{ backgroundColor: "#7950f2", color: "#fff " }}
						>
							<span>👈</span> Previous
						</Button>
						<Button
							onClickHandler={handleNext}
							styling={{ backgroundColor: "#7950f2", color: "#fff " }}
						>
							Next <span>👉</span>
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}

function StepMessage({ children, step }) {
	return (
		<div className="message">
			<h3>Step {step}</h3>
			{children}
		</div>
	);
}

function Button({ children, onClickHandler, styling }) {
	return (
		<button
			style={styling}
			onClick={onClickHandler}
		>
			{children}
		</button>
	);
}
