const USERS_KEY = 'doomsday:users';
const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const getUser = (username) => read(USERS_KEY, {})[username] || null;
export const saveUser = (username, user) => { const users = read(USERS_KEY, {}); users[username] = user; write(USERS_KEY, users); };
export const getProgress = (username) => read(`progress:${username}`, {});
export const saveProgress = (username, progress) => write(`progress:${username}`, progress);
export const getPlan = (username) => read(`plan:${username}`, null);
export const savePlan = (username, plan) => write(`plan:${username}`, plan);
export const getSession = () => localStorage.getItem('doomsday:session');
export const saveSession = (username) => localStorage.setItem('doomsday:session', username);
export const clearSession = () => localStorage.removeItem('doomsday:session');
export async function hashPassword(password) { const bytes = new TextEncoder().encode(password); const hash = await crypto.subtle.digest('SHA-256', bytes); return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, '0')).join(''); }
