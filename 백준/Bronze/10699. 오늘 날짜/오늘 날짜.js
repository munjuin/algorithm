const now = new Date(new Date().setHours(new Date().getHours() + 9));
const YYYY = now.getFullYear();
const MM = (now.getMonth() + 1).toString().padStart(2, 0);
const DD = now.getDate();
console.log(`${YYYY}-${MM}-${DD}`);