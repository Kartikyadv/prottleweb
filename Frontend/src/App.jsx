import { Box, Container } from "@chakra-ui/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import AuthPage from "./pages/AuthPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Header from "./components/Header";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import LogoutButton from "./components/LogoutButton.jsx";
function App() {
	const user = useRecoilValue(userAtom);
	const user2 = {
		_id: "kartik",
		name: "kartik",
		username: "k001",
		profilePic: "/zuck-avatar.png",
		bio: "hey its kartik",
		followers: {
			length: 34,
		},
	};
	const currentPost = {
		text: "hey its kartik ",
		_id: "kartik",
		username: "k001",
		profilePic: "/zuck-avatar.png",
		bio: "hey its kartik",
		replies: [
			{
				_id: 1,
				text: "hey how's going",
				username: "hmt009",
				userProfilePic: "/zuck-avatar.png",
			},
			{
				_id: 11,
				text: "hey how's going",
				username: "hmt009",
				userProfilePic: "/zuck-avatar.png",
			},
			{
				_id: 12,
				text: "hey how's going",
				username: "hmt009",
				userProfilePic: "/zuck-avatar.png",
			},

		],
		likes: [
			{
				_id: 1,
				text: "hey how's going",
				username: "hmt009",
				userProfilePic: "/zuck-avatar.png",
			},
			{
				_id: 11,
				text: "hey how's going",
				username: "hmt009",
				userProfilePic: "/zuck-avatar.png",
			},
			{
				_id: 12,
				text: "hey how's going",
				username: "hmt009",
				userProfilePic: "/zuck-avatar.png",
			},

		],
		createdAt: "2 days",
		img: "/zuck-avatar.png",
	};
	const post = {
		_id: "kartik",
		username: "k001",
		profilePic: "/zuck-avatar.png",
		bio: "hey its kartik",
		replies: [
			{
				_id: 1,
				text: "hey how's going",
				username: "hmt009",
				userProfilePic: "/zuck-avatar.png",
			},
			{
				_id: 11,
				text: "hey how's going",
				username: "hmt009",
				userProfilePic: "/zuck-avatar.png",
			},
			{
				_id: 12,
				text: "hey how's going",
				username: "hmt009",
				userProfilePic: "/zuck-avatar.png",
			},

		],
		likes: [
			{
				_id: 1,
				text: "hey how's going",
				username: "hmt009",
				userProfilePic: "/zuck-avatar.png",
			},
			{
				_id: 11,
				text: "hey how's going",
				username: "hmt009",
				userProfilePic: "/zuck-avatar.png",
			},
			{
				_id: 12,
				text: "hey how's going",
				username: "hmt009",
				userProfilePic: "/zuck-avatar.png",
			},

		],
		createdAt: "2 days",
		img: "/zuck-avatar.png",
	};
	return (
		// <Box position={"relative"} w='full'>
			<Container maxW='620px'>
				<Header />
				<Routes>
				<Route path='/' element={user ? <HomePage /> : <Navigate to='/auth' />} />
					{/* <Route path='/' element={<HomePage />} /> */}
					<Route path='/auth' element={!user ? <AuthPage /> : <Navigate to='/' />} />
					<Route path='/:username' element={<UserPage />} />
					<Route path='/:username/post/:pid' element={<PostPage user={user2} post={post} currentPost={currentPost}/>} />
				</Routes>
				{user && <LogoutButton/>}
			</Container>
		// </Box>
	);
}

export default App;
