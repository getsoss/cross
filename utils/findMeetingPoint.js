import { PriorityQueue } from "@datastructures-js/priority-queue";
import { readJSON } from "./graphService.js";

function dijkstra(graph, start) {
  const dist = {};
  for (let node in graph) {
    dist[node] = Infinity;
  }
  dist[start] = 0;
  const pq = new PriorityQueue((a, b) => a.distance - b.distance);
  pq.enqueue({ node: start, distance: 0 });
  while (!pq.isEmpty()) {
    let { node: v1, distance: w } = pq.dequeue();
    if (w > dist[v1]) continue;
    for (let v2 in graph[v1]) {
      const nw = w + graph[v1][v2];
      if (nw < dist[v2]) {
        dist[v2] = nw;
        pq.enqueue({ node: v2, distance: nw });
      }
    }
  }

  return dist;
}

function findMeetingPoint(graph, starts) {
  let allDistances = {};
  for (let start of starts) {
    allDistances[start] = dijkstra(graph, start); // 각 출발지에서 모든 노드까지의 최단 거리 계산
  }
  let meetingPoint = null;
  let minVariance = Infinity;

  for (let node in graph) {
    const distances = starts.map((start) => allDistances[start][node]);
    const N = distances.length;
    const avg = distances.reduce((prev, cur) => prev + cur, 0) / N;
    const variance =
      distances.reduce((prev, cur) => prev + Math.pow(cur - avg, 2), 0) / N;

    if (variance < minVariance) {
      minVariance = variance;
      meetingPoint = node;
    }
  }

  return meetingPoint;
}
const graph = await readJSON("../assets/data/GRAPH.json");
const midPoint = findMeetingPoint(graph, ["안양", "안양", "안양"]);
console.log(midPoint);
