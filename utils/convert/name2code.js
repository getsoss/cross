import { promises as fs } from "fs";

const filePath = "../assets/data/STATION_CODE.json";

async function loadJsonFile(file) {
  try {
    const data = await fs.readFile(file, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("[ERROR] reading or parsing JSON file:");
    throw error;
  }
}

export default async function name2code(name) {
  if (name === "") return { station_cd: "" };
  try {
    const STATION_CODE = await loadJsonFile(filePath);
    const stationObj = STATION_CODE.DATA.find(
      (data) => data.station_nm === name
    );
    console.log(stationObj);
    return stationObj;
  } catch (error) {
    console.log(`[ERROR] '${name}'의 역코드가 없습니다.`);
    throw error;
  }
}
