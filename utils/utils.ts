export function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}`;
}

export function getCookie(name: string) {
  const regex = new RegExp(`(^| )${name}=([^;]+)`);
  const match = document.cookie.match(regex);
  if (match) {
    return match[2];
  }
}
