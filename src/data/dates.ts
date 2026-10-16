import { events } from "./events";
export const SITE = "https://onthisday-sports.vercel.app";
export const MONTHS = ["january","february","march","april","may","june","july","august","september","october","november","december"];
export const DAYS = [31,29,31,30,31,30,31,31,30,31,30,31];
export const cap = (s:string)=>s[0].toUpperCase()+s.slice(1);
export const allDates = MONTHS.flatMap((m,i)=>Array.from({length:DAYS[i]},(_,d)=>({month:i+1,day:d+1,slug:`${m}-${d+1}`,label:`${cap(m)} ${d+1}`,key:`${String(i+1).padStart(2,"0")}-${String(d+1).padStart(2,"0")}`})));
export const eventsFor = (key:string)=>events.filter(e=>e.date===key).sort((a,b)=>a.year-b.year);
export const ytSearch = (q:string)=>`https://www.youtube.com/results?search_query=${encodeURIComponent(q+" highlights")}`;
