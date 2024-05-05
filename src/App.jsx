import { Box, Container } from "@chakra-ui/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
function App() {
	return (
		// <Box position={"relative"} w='full'>
			<Container maxW='620px'>
				<Header />
				<Routes>
					<Route path='/:username' element={<UserPage />} />
					<Route path='/:username/post/:pid' element={<PostPage />} />
				</Routes>
			</Container>
		// </Box>
	);
}

export default App;
