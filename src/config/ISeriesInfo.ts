export interface ISeriesInfo {
  id?: string;
  name?: string;
  matchType?: string | any;
  status?: string;
  venue?: string;
  date?: string;
  dateTimeGMT?: any;
  teams?: string[];
  fantasyEnabled?: boolean;
  bbbEnabled?: boolean;
  hasSquad?: boolean;
  matchStarted?: boolean;
  matchEnded?: boolean;
  ms?: string; // Match status
  t1?: string; // Team 1 name
  t2?: string; // Team 2 name
  t1s?: string; // Team 1 score
  t2s?: string; // Team 2 score
  t1img?: string; // Team 1 image URL
  t2img?: string; // Team 2 image URL
  series?: string; // Series name
  teamInfo?: any[];
  score?: any[];
}
