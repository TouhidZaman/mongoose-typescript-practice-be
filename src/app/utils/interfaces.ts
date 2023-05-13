export interface IResponse<TData> {
  status: "success" | "fail";
  message?: string;
  data: TData;
}
