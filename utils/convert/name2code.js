import STATION_CODE from "../../assets/data/STATION_CODE.json";

export default async function name2code(name) {
  if (name === "") return { station_cd: "" };
  try {
    const stationObj = STATION_CODE.DATA.find(
      (data) => data.station_nm === name
    );
    console.log(`${stationObj.station_nm}(${stationObj.station_cd})`);
    return stationObj;
  } catch (error) {
    console.log(`[ERROR] '${name}'의 역코드가 없습니다.`);
    throw error;
  }
}
