import STATION_CODE from "../assets/data/STATION_CODE.json";

export default function name2code(name) {
  const findStationCode = STATION_CODE.DATA.filter(
    (data) => data.station_nm === name
  )[0].station_cd;
  return findStationCode;
}
