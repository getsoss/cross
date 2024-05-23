import destructuring from "./convert/destructuring.js";
import fs from "fs";
import MIN2SEC from "./convert/MIN2SEC.js";
import getSubwayPath from "./api/getSubwayPath.js";

function appendEdge(edge, res, wayType = "one-way") {
  if (res === undefined) {
    console.log("[ERROR] 추가할 간선 정보가");
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
          edge.push({ v1: v1, w: weight, v2: v2 });
          if (wayType === "two-way") edge.push({ v1: v2, w: weight, v2: v1 });
        }
      }
    }
  } catch (error) {
    console.log("[ERROR] 그래프 연결 실패");
  }
}

const pathListForMakeGraph = [
  // 1호선 - 검증완료
  ["신창", "연천", "", "2", "two-way"],
  ["병점", "서동탄", "", "2", "two-way"],
  ["금천구청", "광명", "", "2", "two-way"],
  ["구로", "인천", "", "2", "two-way"],
  // 2호선 - 검증완료
  ["성수", "신설동", "", "2", "two-way"],
  ["신도림", "까치산", "", "2", "two-way"],
  ["신도림", "건대입구", "", "2", "two-way"],
  ["건대입구", "강남", "신도림", "2", "two-way"],
  // 3호선 - 검증완료
  ["대화", "오금", "", "2", "two-way"],
  // 4호선 - 검증완료
  ["오이도", "진접", "", "2", "two-way"],
  // 5호선 - 검증완료
  ["방화", "강동", "", "2", "two-way"],
  ["강동", "하남검단산", "", "2", "two-way"],
  ["강동", "마천", "", "2", "two-way"],
  // 6호선 - 검증완료
  ["응암", "역촌", "", "2", "one-way"],
  ["역촌", "응암", "", "2", "one-way"],
  ["응암", "신내", "", "2", "two-way"],
  // 7호선 - 검증완료
  ["석남", "장암", "", "2", "two-way"],
  // 8호선 - 검증완료
  ["암사", "모란", "", "2", "two-way"],
  // 9호선 - 검증완료
  ["개화", "중앙보훈병원", "", "2", "two-way"],
  // 인천1호선 - 검증완료
  ["송도달빛축제공원", "계양", "", "2", "two-way"],
  // 인천2호선  - 검증완료
  ["검단오류", "운연", "", "2", "two-way"],
  // 수인분당선 - 검증완료
  ["인천", "매탄권선", "청량리", "2", "two-way"],
  // 신분당선 - 검증완료
  ["신사", "광교", "", "2", "two-way"],
  // 경의중앙선 - 검증완료
  ["지평", "임진강", "", "2", "two-way"],
  ["가좌", "서울", "", "2", "two-way"],
  // 공항철도 - 검증완료
  ["인천공항2터미널", "서울", "", "2", "two-way"],
  // 경춘선 - 검증완료
  /*
    사이버스테이션 오류로 상봉-광운대 구간 조회 불가능
  */
  ["춘천", "청량리", "", "2", "two-way"],
  // 의정부경전철 - 검증완료
  ["탑석", "발곡", "", "2", "two-way"],
  // 용인경정철
  ["기흥", "전대.에버랜드", "", "2", "two-way"],
  // 경강선
  ["판교", "여주", "", "2", "two-way"],
  // 우이신설경전철
  /*
  - 사이버스테이션 오류로 보문-신설동 구간 조회 불가능
  - 보문->북한산우이 조회 불가능
  */
  ["보문", "북한산우이", "", "2", "two-way"],
  // 서해선 - 검증완료
  ["일산", "원시", "", "2", "two-way"],
  // 김포도시철도 - 검증완료
  ["양촌", "김포공항", "", "2", "two-way"],
  // 신림선 - 검증완료
  ["샛강", "관악산", "", "2", "two-way"],
];

async function makeEdgeList() {
  const edge = [];
  try {
    for (const path of pathListForMakeGraph) {
      const res = await getSubwayPath(path);
      await appendEdge(edge, res, path[4]);
    }
    return edge;
  } catch (error) {
    console.log("[ERROR] 그래프 생성 실패");
    throw error;
  }
}

function saveEdgeFile(edge) {
  const jsonString = JSON.stringify(edge, null, 2);
  const filaPath = "../assets/data/EDGE.json";
  fs.writeFileSync(filaPath, jsonString, { encoding: "utf-8" });
}

async function runSubwayService() {
  try {
    console.log("runGraphManager");
    console.log("makeDistList");
    const dist = await makeEdgeList();
    console.log("saveEdgeFile");
    saveEdgeFile(dist);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// runSubwayService();
