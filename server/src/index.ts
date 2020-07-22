import server from "./config/server";

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
