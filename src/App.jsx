import { Box, Container } from "@chakra-ui/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
function App() {
	const user = {
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
					<Route path='/:username' element={<UserPage />} />
					<Route path='/:username/post/:pid' element={<PostPage user={user} post={post} currentPost={currentPost}/>} />
				</Routes>
			</Container>
		// </Box>
	);
}

export default App;
