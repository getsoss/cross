export default function destructuring(subway) {
  for (const key in subway) {
    if (Array.isArray(subway[key]) && subway[key].length === 1) {
      subway[key] = subway[key][0];
    }
  }
  return subway;
}

/*
{
  endLatitude: [ '' ],
  endLongitude: [ '' ],
  endStationCode: [ '0405' ],
  endStationName: [ '진접' ],
  endTime: [ '182530' ],
  line: [ '4' ],
  pathType: [ 'spath' ],
  runTime: [ '03:00' ],
  startLatitude: [ '' ],
  startLongitude: [ '' ],
  startStationCode: [ '0406' ],
  startStationName: [ '오남' ],
  startTime: [ 'null' ],
  upDown: [ 'UP' ],
  viewTime: [ '128' ],
  XEndStationnumber: [ '405' ],
  XStartStationnumber: [ '406' ]
}
*/
