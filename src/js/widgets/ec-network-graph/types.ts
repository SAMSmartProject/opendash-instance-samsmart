export interface ConfigInterface {
  gateway: string;
  color: string;
  combineDuplicates: boolean;
}

export type HistoryDataType = {
  ip: string;
  ports: number[];
};

export type PreTransformedDataType = {
  type: string;
  id: string;
  value: string;
  name: string;
  fixed?: boolean;
  symbolSize?: number;
  x?: number;
  y?: number;
};
