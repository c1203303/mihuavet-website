import { fromFields } from './schedule.js';

const PROJECT = 'mihua-inventory';
const API_KEY = 'AIzaSyA8VXkDKMa2bXyLZkar2W8XD5qZYs7wgjQ';

export async function getPublicDoc(path) {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents/${path}?key=${API_KEY}`;
  const res = await fetch(url);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Firestore ${res.status}`);
  const json = await res.json();
  return fromFields(json.fields);
}
