import fs from "fs";
function dijkstra(start, graph, dist) {
  dist[start] = 0;
  const pq = [[0, start]];
  while (pq.length) {
    const [w, v] = pq.shift();
    if (dist[v] < w) continue;
    for (const [nv, nw] of graph[v]) {
      const newWeight = nw + w;
      if (newWeight < dist[nv]) {
        dist[nv] = newWeight;
        pq.push([newWeight, nv]);
      }
    }
    pq.sort((a, b) => a[0] - b[0]);
  }
  return dist;
}

function init(graph, dist, merge_dist, edge) {
  for (let { v1, w, v2 } of edge) {
    if (graph[v1] === undefined) {
      graph[v1] = [[v2, w]];
    } else graph[v1].push([v2, w]);
    // merge_dist에 v1 추가 및 초기화
    if (merge_dist[v1] === undefined) merge_dist[v1] = 0;
    // dist에 v1 추가
    if (dist[v1] === undefined) dist[v1] = Infinity;
  }
}

export function MergeDist(dist, merge_dist) {
  for (let [v1, _] of Object.entries(dist)) {
    merge_dist[v1] += dist[v1];
  }
}

function runGraphService() {
  const graph = [];
  const dist = {};
  const merge_dist = {};
  const edge_list = JSON.parse(
    fs.readFileSync("../assets/data/EDGE.json", "utf-8")
  );
  init(graph, dist, merge_dist, edge_list);

  MergeDist(dijkstra("수원", graph, Object.assign({}, dist)), merge_dist);
  MergeDist(dijkstra("안양", graph, Object.assign({}, dist)), merge_dist);

  //   MergeDist(dijkstra("기흥", graph, Object.assign({}, dist)), merge_dist);
  // 주어진 객체를 배열로 변환하고, value를 기준으로 정렬
  const sortedStations = Object.entries(merge_dist).sort(
    ([, value1], [, value2]) => value1 - value2
  );

  const sortedStationsObject = Object.fromEntries(sortedStations.slice(0, 20));

  console.log(sortedStationsObject);
}

runGraphService();
