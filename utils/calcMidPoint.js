/*
1. 지하철 경로 받아오기
2. 지하철 그래프 구성
3. 중간지점 탐색
*/

import getSubwayPath from "./api/getSubwayPath";
import XML2JSON from "./convert/XML2JSON";

export async function main() {
  const xml_path = await getSubwayPath(departureId, arrivalId, stopId, sKind);
  const json_path = await XML2JSON(xml_path);
  await makeGraph();
}
