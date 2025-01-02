import React, { useState, createContext } from "react";

export const TestContext = createContext({
	test: {},
	answers: {},
	correctAnswers: {},
	answers1: [],
});

export const TestWrapper = (props) => {
	const [test, setTest] = useState({});
	const [answers, setAnswers] = useState([]);
	const [correctAnswers, setCorrectAnswers] = useState([]);
	return (
		<TestContext.Provider
			value={{
				test,
				setTest,
				answers,
				setAnswers,
				correctAnswers,
				setCorrectAnswers,
			}}>
			{props.children}
		</TestContext.Provider>
	);
};
