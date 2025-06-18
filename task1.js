function digitSum(k) {
  k = Math.abs(k); // для від’ємних чисел
  if (k < 10) return k;
  return k % 10 + digitSum(Math.floor(k / 10));
}