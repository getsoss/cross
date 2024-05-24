import fs from "fs";
import { saveJSON } from "./subwayService.js";

function createGraph(edgeList) {
  const graph = {};

  edgeList.forEach(({ v1, w, v2 }) => {
    if (!graph[v1]) {
      graph[v1] = {};
    }
    graph[v1][v2] = w;
  });

  return graph;
}

async function readJSON(path) {
  return JSON.parse(await fs.readFileSync(path, "utf-8"));
}

async function runGraphService() {
  const edgeList = await readJSON("../assets/data/EDGE.json");
  console.log("createGraph");
  const graph = createGraph(edgeList);
  saveJSON(graph, "GRAPH");
}

// runGraphService();

export { readJSON };
