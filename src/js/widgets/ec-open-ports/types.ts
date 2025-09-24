export interface ConfigInterface {
  gateway: string;
  color: string;
  combineDuplicates: boolean;
}

export type HistoryDataType = {
  date: number;
  value: { ip: string; ports: Array<number> };
};

export type SunburstDataItem = {
  name: string;
  value: number;
  children?: SunburstDataItem[];
  itemStyle?: {
    color?: string;
  };
};

export type TransformedDataType = SunburstDataItem;
