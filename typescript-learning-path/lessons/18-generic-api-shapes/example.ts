type ApiResponse<T> = { data: T; receivedAt: string };
const response: ApiResponse<string[]> = {
  data: ['ok'],
  receivedAt: new Date().toISOString(),
};
console.log(response.data);
export {};
