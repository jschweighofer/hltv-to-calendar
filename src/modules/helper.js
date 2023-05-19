export function alertThrowError(msg) {
  alert(msg);
  throw new Error(msg);
}