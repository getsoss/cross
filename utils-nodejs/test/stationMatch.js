import { readJSON } from "../graphService.js";

async function stationMatchEdge() {
  const STATION = await readJSON("../../assets/data/STATION_CODE.json");
  const EDGE = await readJSON("../../assets/data/EDGE.json");

  const edgeStations = new Set();
  EDGE.forEach((edge) => {
    edgeStations.add(edge.v1);
    edgeStations.add(edge.v2);
  });
  // STATION_CODE.json에서 모든 역을 집합으로 변환
  const stationNames = new Set(
    STATION.DATA.map((station) => station.station_nm)
  );

  // STATION_CODE.json에 존재하는 역 중 EDGE.json에 없는 역 찾기
  const missingStations = new Set(
    [...stationNames].filter((station) => !edgeStations.has(station))
  );

  if (missingStations.size === 0) {
    console.log("STATION_CODE.json의 모든 역이 EDGE.json에 존재합니다.");
  } else {
    console.log("다음 역이 EDGE.json에 존재하지 않습니다:");
    missingStations.forEach((station) => console.log(station));
  }
}

async function stationMatchGraph() {
  const STATION = await readJSON("../../assets/data/STATION_CODE.json");
  const GRAPH = await readJSON("../../assets/data/GRAPH.json");
  // STATION_CODE.json에서 모든 역을 집합으로 변환
  const stationNames = new Set(
    STATION.DATA.map((station) => station.station_nm)
  );

  // GRAPH.json에서 모든 역을 집합으로 변환
  const graphStations = new Set();

  // 그래프의 노드 및 이웃 노드를 집합에 추가
  for (let node in GRAPH) {
    graphStations.add(node);
    for (let neighbor in GRAPH[node]) {
      graphStations.add(neighbor);
    }
  }

  // STATION_CODE.json에 존재하는 역 중 GRAPH.json에 없는 역 찾기
  const missingStations = new Set(
    [...stationNames].filter((station) => !graphStations.has(station))
  );

  if (missingStations.size === 0) {
    console.log("STATION_CODE.json의 모든 역이 GRAPH.json에 존재합니다.");
  } else {
    console.log("다음 역이 GRAPH.json에 존재하지 않습니다:");
    missingStations.forEach((station) => console.log(station));
  }
}

// stationMatchEdge();
// stationMatchGraph();
// 검증 완료
