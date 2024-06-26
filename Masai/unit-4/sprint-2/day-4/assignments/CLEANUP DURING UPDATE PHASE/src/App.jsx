import { useState, useEffect } from "react";
import { createConnection } from "./chat";

function ChatRoom({ roomId }) {
  // State to manage the server URL
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(); // Create a new connection instance

    // Connect to the room when the component mounts or when serverURL or roomId changes
    connection.connect(serverUrl, roomId);

    return () => {
      // Disconnect from the room when the component unmounts or when serverURL or roomId changes
      connection.disconnect();
    };
  }, [serverUrl, roomId]);

  return (
    <>
      <label>
        Server URL:{" "}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

// Main application component
export default function App() {
  // State to manage the current chat room and show/hide the chat room component
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
