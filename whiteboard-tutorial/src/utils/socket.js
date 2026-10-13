import { io } from "socket.io-client";
import { API_URL } from "../config";

const token = localStorage.getItem("whiteboard_user_token");

const socket = io(API_URL, {
  extraHeaders: token ? { Authorization: `Bearer ${token}` } : {}, // Only send if token exists
});

export default socket;
