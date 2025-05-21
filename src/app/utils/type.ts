export interface timeType {
  en: string;
  jp: string;
}
export interface tranType {
  en: string;
  jp: string;
  url: string;
}
export interface ScheduleRow {
  time: timeType;
  monday: tranType;
  tuesday: tranType;
  wednesday: tranType;
  thursday: tranType;
  friday: tranType;
  color: string;
}

export type Glance = {
  quote: {
    en?: string;
    jp?: string;
  };
  answer: {
    en?: string;
    jp?: string;
  };
};