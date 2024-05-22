import STATION_CODE from "../../assets/data/STATION_CODE.json";

export default function name2code(name) {
  try {
    const findStationCode = STATION_CODE.DATA.filter(
      (data) => data.station_nm === name
    )[0];
    return findStationCode;
  } catch (error) {
    console.log(`[ERROR] '${name}'의 역코드가 없습니다.`);
  }
}
