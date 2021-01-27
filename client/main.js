import { runWorker } from "/imports/ui/master";

const runner = document.querySelector("#runner");

runner.addEventListener("click", () => {
  console.log("Start a worker");
  runWorker();
});
