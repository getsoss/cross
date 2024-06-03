import XML2JSON from "../convert/XML2JSON.js";
import name2code from "../convert/name2code.js";

export default async function getSubwayPath(path) {
  const [
    departure, // 출발 역명
    arrival, // 도착 역명
    stop, // 경유 역명
    sKind, // 1:최소시간, 2:최소환승, 3:null, 4:최단거리
  ] = path;

  console.log("Departure:", departure, "Arrival:", arrival);

  const departureId = (await name2code(departure)).station_cd;
  const arrivalId = (await name2code(arrival)).station_cd;
  const stopId = (await name2code(stop)).station_cd;
  if (departureId === null || arrivalId === null) {
    console.error(
      `[ERROR] 올바르지 않은 역코드 ${departureId} --> ${arrivalId}`
    );
    throw error;
  }

  try {
    let reqURL = "http://www.seoulmetro.co.kr/kr/getRouteSearchResult.do";
    reqURL += `?departureId=${departureId}&arrivalId=${arrivalId}&sKind=${sKind}&stopId=${stopId}`;
    // console.log(`[CALL] ${reqURL}`);
    const xmlData = await fetch(reqURL);
    const jsonData = await XML2JSON(xmlData);
    return jsonData.route.sPath[0].pathList;
  } catch (error) {
    console.error(`[API ERROR] 지하철 경로 가져오기 실패: ${error.message}`);
    throw error;
  }
}
