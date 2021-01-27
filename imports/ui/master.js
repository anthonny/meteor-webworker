// master.js
import { spawn, Thread, Worker } from "threads";

export const runWorker = async () => {
  const auth = await spawn(new Worker("worker.js"));
  const hashed = await auth.hashPassword("Super secret password", "1234");

  console.log("Hashed password:", hashed);

  await Thread.terminate(auth);
};
