import { Box } from "@chakra-ui/react";

export default function Chat() {
  const socket = new WebSocket(`ws://localhost:4000`);

  socket.addEventListener("open", () => {
    console.log("채팅이 연결되었습니다.");
  });

  socket.addEventListener("message", (message) => {
    console.log("just got this: ", message.data, "from this server");
  });

  socket.addEventListener("close", () => {
    console.log("접속종료");
  });

  setTimeout(() => {
    socket.send("hello from the browswer");
  }, 5000);
  return <Box></Box>;
}
