import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import { useParams } from "react-router-dom";
import { Flex, Spinner } from "@chakra-ui/react";
import Post from "../components/Post";

const UserPage = () => {
	const user = {
		_id: "kartik",
		name: "kartik",
		username: "k001",
		profilePic: "./zuck-avatar.png",
		bio: "hey its kartik",
		followers: {
			length: 34,
		},
	};
	const post = {
		_id: "kartik",
		username: "k001",
		profilePic: "./zuck-avatar.png",
		bio: "hey its kartik",
		replies: {
			length: 0,
		},
		likes: {
			length: 0,
		},
		createdAt: "2 days",
		img: "./zuck-avatar.png",
	};
  return (
    <>
      <UserHeader user={user} />
	  <Post user={user} post={post}/>
    </>
  );
};

export default UserPage;
