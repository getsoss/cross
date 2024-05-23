import destructuring from "./convert/destructuring.js";
import fs from "fs";
import MIN2SEC from "./convert/MIN2SEC.js";
import getSubwayPath from "./api/getSubwayPath.js";

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

function initDist(graph, dist, merge_dist, subway) {
  for (let [v1, v2, w] of subway) {
    if (graph[v1] === undefined) {
      graph[v1] = [[v2, w]];
    } else graph[v1].push([v2, w]);
    // merge_dist에 v1 추가 및 초기화
    if (merge_dist[v1] === undefined) merge_dist[v1] = 0;
    // dist에 v1 추가
    if (dist[v1] === undefined) dist[v1] = Infinity;
  }
}

function linkGraph(graph, res, wayType = "one-way") {
  if (res === undefined) {
    console.log("[ERROR] 연결할 그래프 정보가 없음");
    return;
  }
  try {
    const sPath = res.route.sPath;
    for (let path of sPath) {
      for (let subway of path.pathList) {
        const {
          startStationName: v1,
          runTime: time,
          endStationName: v2,
        } = destructuring(subway);
        if (v1 !== v2) {
          const weight = MIN2SEC(time);
          graph.push({ v1: v1, w: weight, v2: v2 });
          if (wayType === "two-way") graph.push({ v1: v2, w: weight, v2: v1 });
        }
      }
    }
  } catch (error) {
    console.log("[ERROR] 그래프 연결 실패");
  }
}

const pathListForMakeGraph = [
  // 1호선
  ["신창", "연천", "", "1", "two-way"],
  ["병점", "서동탄", "", "1", "two-way"],
  ["금천구청", "광명", "", "1", "two-way"],
  ["구로", "인천", "", "1", "two-way"],
  // 2호선
  ["성수", "신설동", "", "1", "two-way"],
  ["신도림", "까치산", "", "1", "two-way"],
  ["신도림", "건대입구", "", "1", "two-way"],
  ["건대입구", "강남", "신도림", "1", "two-way"],
  // 3호선
  ["대화", "오금", "", "1", "two-way"],
  // 4호선
  ["오이도", "진접", "", "1", "two-way"],
  // 5호선
  ["방화", "강동", "", "1", "two-way"],
  ["강동", "하남검단산", "", "1", "two-way"],
  ["강동", "마천", "", "1", "two-way"],
  // 6호선
  ["응암", "역촌", "", "1", "one-way"],
  ["역촌", "응암", "", "1", "one-way"],
  ["응암", "신내", "", "2", "two-way"],
  // 7호선
  ["석남", "장암", "", "1", "two-way"],
  // 8호선
  ["암사", "모란", "", "1", "two-way"],
  // 9호선
  ["개화", "중앙보훈병원", "", "1", "two-way"],
  // 인천1호선
  ["송도달빛축제공원", "계양", "", "1", "two-way"],
  // 인천2호선
  ["검단오류", "운연", "", "1", "two-way"],
  // 수인분당선
  ["인천", "매탄권선", "청량리", "4", "two-way"],
  // 신분당선
  ["신사", "광교", "", "1", "two-way"],
  // 경의중앙선
  ["지평", "임진강", "", "1", "two-way"],
  ["가좌", "서울", "", "1", "two-way"],
  // 공항철도
  ["인천공항2터미널", "서울", "", "1", "two-way"],
  // 경춘선
  ["춘천", "청량리", "", "1", "two-way"],
  // 의정부경전철
  ["탑석", "발곡", "", "1", "two-way"],
  // 용인경정철
  ["기흥", "전대.에버랜드", "", "1", "two-way"],
  // 경강선
  ["판교", "여주", "", "1", "two-way"],
  // 우이신설경전철
  ["보문", "북한산우이", "", "1", "two-way"],
  // 서해선
  ["양촌", "김포공항", "", "1", "two-way"],
  // 김포도시철도
  ["양촌", "김포공항", "", "1", "two-way"],
  // 신림선
  ["샛강", "관악산", "", "1", "two-way"],
];

export async function makeGraph() {
  const graph = [];
  try {
    for (const path of pathListForMakeGraph) {
      const res = await getSubwayPath(path);
      await linkGraph(graph, res, path[4]);
    }
    return graph;
  } catch (error) {
    console.log("[ERROR] 그래프 생성 실패");
    throw error;
  }
}

export function saveGraphDataFile(graph) {
  const jsonString = JSON.stringify(graph, null, 2);
  const filaPath = "../assets/data/GRAPH.json";
  fs.writeFileSync(filaPath, jsonString, { encoding: "utf-8" });
}

async function runGraphManager() {
  try {
    console.log("runGraphManager");
    console.log("makeGraph");
    const graph = await makeGraph();
    console.log("saveGraphJSON");
    saveGraphDataFile(graph);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

runGraphManager();
