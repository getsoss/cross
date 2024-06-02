export default set2time = (sec) => {
  const hh = Math.floor(sec / 3600);
  const mm = Math.floor((sec % 3600) / 60);
  const ss = sec % 60;

  const HH = String(hh).padStart(2, "0");
  const MM = String(mm).padStart(2, "0");
  const SS = String(ss).padStart(2, "0");
  if (HH === "00") return `${MM}:${SS}`;
  return `${HH}:${MM}:${SS}`;
};
