export default function MIN2SEC(time) {
  const [min, sec] = time.split(":");
  const total_sec = parseInt(min) * 60 + parseInt(sec);
  return total_sec;
}
