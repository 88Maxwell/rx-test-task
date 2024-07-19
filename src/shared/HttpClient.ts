import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { injectable, singleton } from "tsyringe";

type MethodConfig = Omit<AxiosRequestConfig, "url" | "method">;

@singleton()
@injectable()
export class HTTPClient {
  private token: string | null = null;
  private client: AxiosInstance;

  constructor(private baseUrl: string) {
    this.baseUrl = baseUrl;
    this.client = this.createInstance();
    // this.client.interceptors.request.use(this.authorizedInterceptor.bind(this));
    // this.client.interceptors.request.use(this.deviceIdRequestInterceptor.bind(this));
    // this.client.interceptors.response.use((res) => res, this.unauthorizationInterceptor.bind(this));
  }

  private createInstance(): AxiosInstance {
    return axios.create({ baseURL: this.baseUrl });
  }

  // private authorizedInterceptor(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
  //   if (!this.token) {
  //     this.token = getToken();
  //   }
  //   this.token && config.headers.set("Authorization", `Bearer ${this.token}`);

  //   return config;
  // }

  // private unauthorizationInterceptor(error: AxiosError): Promise<AxiosError | void> {
  //   if (typeof window === "undefined") return Promise.reject(error);
  //   const responseStatus = error.response?.status;
  //   const isUnauthorized = responseStatus === ResponseStatus.UNAUTHORIZED;
  //   const isForbidden = responseStatus === ResponseStatus.FORBIDDEN;
  //   const pageUrl = window.location.pathname + window.location.search;
  //   if (isForbidden || isUnauthorized) {
  //     pushLocation({ pathname: "/login", query: { nextRoute: pageUrl } });
  //     return Promise.resolve();
  //   }
  //   return Promise.reject(error);
  // }

  private async request<ResponseData = unknown>(config: AxiosRequestConfig): Promise<ResponseData> {
    try {
      const { data: result } = await this.client.request<ResponseData>(config);
      return result;
    } catch (err: unknown) {
      return Promise.reject(err);
    }
  }

  public async get<ResponseData = unknown>(
    url: string,
    config: MethodConfig = {}
  ): Promise<ResponseData> {
    return this.request<ResponseData>({ url, method: "GET", ...config });
  }

  public async post<ResponseData = unknown>(
    url: string,
    config: MethodConfig = {}
  ): Promise<ResponseData> {
    return this.request<ResponseData>({ url, method: "POST", ...config });
  }

  public async put<ResponseData = unknown>(
    url: string,
    config: MethodConfig = {}
  ): Promise<ResponseData> {
    return this.request<ResponseData>({ url, method: "PUT", ...config });
  }

  public async patch<ResponseData = unknown>(
    url: string,
    config: MethodConfig = {}
  ): Promise<ResponseData> {
    return this.request<ResponseData>({ url, method: "PATCH", ...config });
  }

  public async delete<ResponseData = unknown>(
    url: string,
    config: MethodConfig = {}
  ): Promise<ResponseData> {
    return this.request<ResponseData>({ url, method: "DELETE", ...config });
  }
}

export const httpClientFactory = (apiUrl: string) => () => {
  const httpClient = new HTTPClient(apiUrl);

  return httpClient;
};
