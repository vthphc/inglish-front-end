import React from "react";
import { Routes, Route } from "react-router-dom";

import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import ExamsPage from "./pages/ExamsPage";
import FlashcardsPage from "./pages/FlashcardsPage";
import PageLayout from "./components/Layout/PageLayout";
import ExamDetailsPage from "./pages/ExamDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import ListeningPage from "./pages/ListeningPage";
import TestPage from "./pages/TestPage";
import FlashcardGenerate from "./components/Flashcards/FlashcardGenerate";

export default function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route
					path="/signin"
					element={<SigninPage />}
				/>
				<Route
					path="/signup"
					element={<SignupPage />}
				/>
				<Route element={<PageLayout />}>
					<Route
						path="/home"
						element={<HomePage />}
					/>
					<Route
						path="/exams"
						element={<ExamsPage />}
					/>
					<Route
						path="/exams/:examId"
						element={<ExamDetailsPage />}
					/>
					<Route
						path="/exams/:examId/test"
						element={<TestPage/>}
					/>
					<Route
						path="/listening/:lessonId"
						element={<ListeningPage />}
					/>
					<Route
						path="/profile"
						element={<ProfilePage />}
					/>
					<Route
						path="/flashcards"
						element={<FlashcardsPage />}
					/>
					<Route 
						path="/flashcards/generate"
						element={<FlashcardGenerate />}
					/>
				</Route>
			</Routes>
		</div>
	);
}
