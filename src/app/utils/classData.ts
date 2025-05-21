import { ScheduleRow } from "./type";

export const catalogs = [
  {en: "Pronunciation", jp: "発音", path: "#pronunciation"},
  {en: "Grammar", jp: "文法", path: "#grammar"},
  {en: "Communication Skills", jp: "話し方のコツ", path: "#communication"},
  {en: "Real-live Writing", jp: "文法", path: "#real_live"},
  {en: "TV & Music", jp: "テレビ・音楽", path: "#tv_music"},
  {en: "Private Lessons", jp: "個人レッスン", path: "#private_lessons"},
]

export const guides = [
  {en: "How Does English Work?", jp: "教育英文法", path: "#english-work"},
  {en: "How Do You Teach English?", jp: "英語教授法", path: "#teach-english"}
]

export const summerSchedule: ScheduleRow[] = [
  { 
    time: { en: "8–10 AM", jp: "日本時間午後９〜１１時（同日）" },
    monday: { en: "How Does English Work?", jp: "教育英文法", url: "#" },
    tuesday: { en: "", jp: "", url: "#" },
    wednesday: { en: "", jp: "", url: "#" },
    thursday: { en: "How Does English Work?", jp: "教育系文法", url: "#" },
    friday: { en: "", jp: "", url: "#" },
    color: "#999999"
  },
  { 
    time: { en: "12–2 PM", jp: "" },
    monday: { en: "", jp: "", url: "#" },
    tuesday: { en: "", jp: "", url: "#" },
    wednesday: { en: "", jp: "", url: "#" },
    thursday: { en: "", jp: "", url: "#" },
    friday: { en: "", jp: "", url: "#" },
    color: "#666666"
  },
  { 
    time: { en: "3–5 PM", jp: "" },
    monday: { en: "", jp: "", url: "#" },
    tuesday: { en: "", jp: "", url: "#" },
    wednesday: { en: "", jp: "", url: "#" },
    thursday: { en: "", jp: "", url: "#" },
    friday: { en: "", jp: "", url: "#" },
    color: "#434343"
  },
  { 
    time: { en: "7–9 PM", jp: "日本時間午後９〜１１時（同日）" },
    monday: { en: "How Do You Teach English?", jp: "英語教授法", url: "#" },
    tuesday: { en: "", jp: "", url: "#" },
    wednesday: { en: "", jp: "", url: "#" },
    thursday: { en: "How Do You Teach English?", jp: "英語教授法", url: "#" },
    friday: { en: "", jp: "", url: "#" },
    color: "#000000"
  }
];

export const fallSchedule: ScheduleRow[] = [
  { 
    time: { en: "8–10 AM", jp: "日本時間午後９〜１１時（同日）" },
    monday: { en: "Pronunciation 1", jp: "発音１", url: "#" },
    tuesday: { en: "Grammar: Beginner", jp: "文法：初級", url: "#" },
    wednesday: { en: "Pronunciation 2", jp: "発音２", url: "#" },
    thursday: { en: "", jp: "", url: "#" },
    friday: { en: "", jp: "", url: "#" },
    color: "#999999"
  },
  { 
    time: { en: "12–2 PM", jp: "" },
    monday: { en: "Grammar:Intermediate", jp: "文法：中級", url: "#" },
    tuesday: { en: "Grammar:Advanced", jp: "文法：上級", url: "#" },
    wednesday: { en: "Real-Life Writing", jp: "実用ライティング", url: "#" },
    thursday: { en: "TV & Music: Intermediate", jp: "テレビ・音楽：中級", url: "#" },
    friday: { en: "", jp: "", url: "#" },
    color: "#666666"
  },
  { 
    time: { en: "5-7 PM", jp: "日本時間午前6〜８時（翌日）" },
    monday: { en: "", jp: "", url: "#" },
    tuesday: { en: "", jp: "", url: "#" },
    wednesday: { en: "", jp: "", url: "#" },
    thursday: { en: "", jp: "", url: "#" },
    friday: { en: "", jp: "", url: "#" },
    color: "#434343"
  },
  { 
    time: { en: "7:15-9:15 PM", jp: "日本時間午前８時15分〜１０時15分（翌日）" },
    monday: { en: "TV & Music: Upper Intermediate/Advanced", jp: "テレビ・音楽：中上級", url: "#" },
    tuesday: { en: "Communication 1", jp: "話し方のコツ１", url: "#" },
    wednesday: { en: "Grammar:Upper Intermediate", jp: "文法：上中級", url: "#" },
    thursday: { en: "Communication 2", jp: "話し方のコツ２", url: "#" },
    friday: { en: "", jp: "", url: "#" },
    color: "#000000"
  }
];

