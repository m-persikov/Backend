import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage, NotFoundPage, RegistrationPage } from './pages';

import './App.css';

// const Layout: FC = () => {
// 	return (
// 		<>
// 			<header>Header</header>
// 			<Outlet />
// 			<footer>Footer</footer>
// 		</>
// 	);
// };

const AuthRoutes = () => (
	<Routes>
		{/* <Route path="/" element={<Layout />}> */}
		<Route path="/auth" element={<LoginPage />} />
		<Route path="/registration" element={<RegistrationPage />} />
		<Route path="/*" element={<Navigate to="/auth" />} />
		{/* </Route> */}
	</Routes>
);

const MainRoutes = () => (
	<Routes>
		<Route path="*" element={<NotFoundPage />} />
	</Routes>
);

function App() {
	const [isAuth, setIsAuth] = useState(false);

	return <BrowserRouter>{isAuth ? <MainRoutes /> : <AuthRoutes />}</BrowserRouter>;
}

export default App;
