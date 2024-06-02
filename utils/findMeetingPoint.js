import { PriorityQueue } from "@datastructures-js/priority-queue";
import GRAPH from "../assets/data/GRAPH.json";

function dijkstra(start) {
  const dist = {};
  for (let node in GRAPH) {
    dist[node] = Infinity;
  }
  dist[start] = 0;
  const pq = new PriorityQueue((a, b) => a.distance - b.distance);
  pq.enqueue({ node: start, distance: 0 });
  while (!pq.isEmpty()) {
    let { node: v1, distance: w } = pq.dequeue();
    if (w > dist[v1]) continue;
    for (let v2 in GRAPH[v1]) {
      const nw = w + GRAPH[v1][v2];
      if (nw < dist[v2]) {
        dist[v2] = nw;
        pq.enqueue({ node: v2, distance: nw });
      }
    }
  }
  return dist;
}

async function calcAllDist(starts) {
  let all_dist = {};
  for (let start of starts) {
    all_dist[start] = dijkstra(start);
  }
  return all_dist;
}

function calcTotalDistancesAndVariances(allDistances, starts) {
  let results = {};
  for (let node in GRAPH) {
    const distances = starts.map((start) => allDistances[start][node]);
    const N = distances.length;
    const totalDistance = distances.reduce((sum, cur) => sum + cur, 0);
    const mean = totalDistance / N;
    let variance = distances.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / N;
    results[node] = { totalDistance, variance };
  }
  return results;
}

function findTopMeetingPoints(precomputedResults, alpha = 0.5, rank = 10) {
  let scoredResults = [];

  for (let node in precomputedResults) {
    let { totalDistance, variance } = precomputedResults[node];
    let score = alpha * totalDistance + (1 - alpha) * variance;
    scoredResults.push({ node, totalDistance, variance, score });
  }

  // 총 이동 시간 순으로 정렬하고, 같은 총 이동 거리 내에서 분산 값을 기준으로 정렬
  scoredResults.sort((a, b) => {
    if (a.totalDistance === b.totalDistance) {
      return a.variance - b.variance;
    }
    return a.totalDistance - b.totalDistance;
  });

  return scoredResults.slice(0, rank);
}

export async function findTopMeetingPoint(starts, alpha = 0.5, rank = 10) {
  if (starts.length <= 1) return null;
  const all_dist = await calcAllDist(starts);
  const precomputedResults = calcTotalDistancesAndVariances(all_dist, starts);

  const topPoints = findTopMeetingPoints(precomputedResults, alpha, rank);
  // console.log(`Alpha = ${alpha}: 상위 10개의 중간 지점`);
  // topPoints.forEach((point) => {
  //   console.log(
  //     `Node: ${point.node}, Total Distance: ${point.totalDistance}, Variance: ${point.variance}`
  //   );
  // });
  return topPoints;
}

// findTopMeetingPoint(["복정", "고색", "홍대입구"], 0.5, 10);
