import * as FileSystem from "expo-file-system";
import { getSubwayPath } from "./api/getSubwayPath";

const makeGraph = async (
  graph,
  departureId,
  arrivalId,
  stopId = "",
  sKind = 1,
  isDual = true
) => {
  const xml_path = await getSubwayPath(departureId, arrivalId, stopId, sKind);
  const json_path = await XML2JSON(xml_path);
  console.log(json_path);
  printResHeader(json_path.route);

  const sPath = json_path.route.sPath;
  for (const path of sPath) {
    for (const subway of path.pathList) {
      const {
        startStationName: v1,
        startStationCode: v1_code,
        runTime: time,
        endStationName: v2,
        endStationCode: v2_code,
      } = destructuring(subway);
      if (v1 !== v2) {
        const weight = MIN2SEC(time);
        graph.push(`{"v1":"${v1}", "w":"${weight}","v2":"${v2}"},\n`);
        subwayNameList.push(`"${v1}":"${v1_code}",\n`);
        subwayNameList.push(`"${v2}":"${v2_code}",\n`);
        if (isDual)
          graph.push(`{"v1":"${v2}", "w":"${weight}","v2":"${v1}"},\n`);
      }
    }
  }
};
const searchTarget = [
  ["1408", "1919", "", ""],
  ["1716", "1749", "", ""],
  ["1703", "1750", "", ""],
  ["1701", "1802", "", ""],
  ["0211", "0156", "", ""],
  ["1007", "0200", "", ""],
  ["1007", "0212", "", ""],
  ["0212", "1007", "0222", ""],
  ["1958", "2558", "", ""],
  ["1762", "0405", "", ""],
  ["2511", "2549", "", ""],
  ["2549", "2566", "", ""],
  ["2549", "2561", "", ""],
  ["2611", "2612", "", "", false],
  ["2612", "2611", "", "", false],
  ["2611", "2649", "", "2"],
  ["3213", "2711", "", ""],
  ["2811", "2827", "", ""],
  ["4104", "4138", "", ""],
  ["3139", "3110", "", ""],
  ["3201", "3227", "", ""],
  ["1812", "0158", "1870", "4"],
  ["0327", "4319", "", ""],
  ["1220", "1285", "", ""],
  ["1265", "1251", "", ""],
  ["4215", "0150", "", ""],
  ["1329", "0158", "", ""],
  ["4615", "4601", "", ""],
  ["4501", "4517", "", ""],
  ["4311", "1511", "", ""],
  ["2639", "4701", "", ""],
  ["4815", "1275", "", ""],
  ["4920", "2513", "", ""],
  ["4116", "4411", "", ""],
];
const main = async () => {
  let graph = ["["];
  for (const target of searchTarget) {
    await makeGraph(graph, ...target);
  }
  graph.push("{}]");
  fs.writeFileSync("./graph.json", graph.join(""), { encoding: "utf-8" });
};

main();
