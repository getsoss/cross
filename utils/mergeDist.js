import { dijkstra } from "./dijkstra.js";
import subway_list from "./TimeRequiredBetweenStations.js";
export function MergeDist(dist, merge_dist) {
  for (let [v1, _] of Object.entries(dist)) {
    merge_dist[v1] += dist[v1];
  }
}

function main() {
  const graph = [];
  const dist = {};
  const merge_dist = {};
  for (let subway of subway_list) initGraph(graph, dist, merge_dist, subway);

  MergeDist(dijkstra("산곡", graph, Object.assign({}, dist)), merge_dist);
  MergeDist(dijkstra("계산", graph, Object.assign({}, dist)), merge_dist);
  // MergeDist(dijkstra("시청", graph, Object.assign({}, dist)), merge_dist);
  console.log(merge_dist);
}
main();
