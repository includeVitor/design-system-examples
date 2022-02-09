type Technology = {
  id: number;
  name: string;
};

type ApiError = {
  data: string;
};

enum ApiRoutes {
  tech = "tech",
}

export { ApiRoutes };
export type { Technology, ApiError };
