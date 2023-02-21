export function dateFormat(date) {
  const milliSeconds = new Date() - new Date(date);
  const seconds = milliSeconds / 1000;
  if (seconds < 60) return "방금 전";
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;
  if (days >= 7) {
    const arrDate = date.substr(0, 10).split("-");
    return `${arrDate[0]}년 ${arrDate[1]}월 ${arrDate[2]}일`;
  }
}

export function nameFormat(name) {
  const fullName = Array.from(name);
  return `${fullName[0]}*${fullName[2]}`;
}

export function emailFormat(email) {
  const fullEmail = Array.from(email);
  return fullEmail.splice(2, 1, "8");
}

export function categoryFormat(category) {
  category.map((item, i) => <span key={i}>{item}</span>);
}
