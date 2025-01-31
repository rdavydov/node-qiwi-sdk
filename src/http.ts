import fetch, { RequestInit } from "node-fetch";
import AbortController from "abort-controller";
import querystring from "query-string";
import { ErrorWithCode, ExtendedError } from "./error";

/**
 * Ошибка, которую выбрасывает Http API при неправильном коде ответа
 */
export class HttpError extends ErrorWithCode<number> {
  /**
   *
   * @param {number} code Код ответа
   * @param {number} body Тело ответа
   */
  constructor(public code: number, public body: string) {
    super(`API Responded with Error response code: ${code}`, code);
  }

  /**
   *
   * @return {Error}
   */
  toJSON(): Error & { code: number; body: string } {
    return {
      message: this.message,
      name: this.name,
      stack: this.stack,
      code: this.code,
      body: this.body
    };
  }
}

export type Agent = RequestInit["agent"];

/**
 * Ошибка раскодировки ответа сервера
 */
export class DecodingError extends ExtendedError {}

/**
 *
 */
export class HttpAPI {
  protected readonly API_URL: string = "";
  protected readonly API_HEADERS: Record<string, string> = {};
  protected readonly API_TIMEOUT: number = 10_000;
  protected readonly API_OK_RESPONSE_CODES: number[] = [200];
  protected agent?: Agent;

  /**
   * Simplified http request function
   *
   * @throws {HttpError} If http error code is not matched valid
   * @throws {DecodingError} If unable to decode response
   *
   * @param {string} url Relative to API url path
   * @param {string} method Http request method
   * @param {Record<string, string>} headers Additional headers to API
   * @param {string?} body Request body
   *
   * @return {Promise<*>} Decoded response
   */
  protected async _request(
    url: string,
    method: string,
    headers: Record<string, string>,
    body?: string | undefined
  ): Promise<any> {
    const absoluteUrl =
      url.startsWith("https://") || url.startsWith("http://")
        ? url
        : `${this.API_URL}///${url}`.replace(/\/{3,}/g, "/");
    //                    ^^^ 3 cлеша не встречаются в URL, поэтому их можно
    // использовать как костыль для нормализации. Чтобы было не GET //path, а GET /path

    const abortController = new AbortController();
    const timeout = setTimeout(() => abortController.abort(), this.API_TIMEOUT);

    const response = await fetch(absoluteUrl, {
      method,
      headers: { ...this.API_HEADERS, ...headers },
      body,
      agent: this.agent,
      signal: abortController.signal
    }).finally(() => clearTimeout(timeout));

    if (method.toLowerCase() === "head") {
      return undefined;
    }

    const contentType = response.headers.get("content-type")?.split(";")[0];
    const responseBuffer = await response.buffer();

    if (!this.API_OK_RESPONSE_CODES.includes(response.status)) {
      throw new HttpError(response.status, responseBuffer.toString());
    }

    try {
      if (contentType?.startsWith("text/")) return responseBuffer.toString();

      switch (contentType) {
        case "application/json":
          return JSON.parse(responseBuffer.toString());
        case "application/x-www-form-urlencoded":
          return querystring.parse(responseBuffer.toString());
      }

      return responseBuffer;
    } catch (error: any) {
      throw new DecodingError(error.message);
    }
  }

  /**
   * Делает GET запрос и парсит ответ
   * @template T
   * @param {string} url URL запроса
   * @param {Record<string, string>=} headers Заголовки запроса
   * @return {Promise<T>}
   */
  protected async get<T = any>(
    url: string,
    headers: Record<string, string> = {}
  ): Promise<T> {
    return await this._request(url, "GET", headers);
  }

  /**
   * Делает HEAD запрос и парсит ответ
   * @template T
   * @param {string} url URL запроса
   * @param {Record<string, string>=} headers Заголовки запроса
   * @return {Promise<T>}
   */
  protected async head<T>(
    url: string,
    headers: Record<string, string> = {}
  ): Promise<T> {
    return await this._request(url, "HEAD", headers);
  }

  /**
   * Делает POST запрос и парсит ответ
   * @template T
   *
   * @param {string} url URL запроса
   * @param {Record<string, string>=} headers Заголовки запроса
   * @param {string=} body Тело запроса
   *
   * @return {Promise<T>}
   */
  protected async post<T>(
    url: string,
    headers: Record<string, string> = {},
    body?: string | undefined
  ): Promise<T> {
    return await this._request(url, "POST", headers, body);
  }

  /**
   * Делает PUT запрос и парсит ответ
   * @template T
   *
   * @param {string} url URL запроса
   * @param {Record<string, string>=} headers Заголовки запроса
   * @param {string=} body Тело запроса
   *
   * @return {Promise<T>}
   */
  protected async put<T>(
    url: string,
    headers: Record<string, string> = {},
    body?: string | undefined
  ): Promise<T> {
    return await this._request(url, "PUT", headers, body);
  }

  /**
   * Делает PATCH запрос и парсит ответ
   * @template T
   *
   * @param {string} url URL запроса
   * @param {Record<string, string>=} headers Заголовки запроса
   * @param {string=} body Тело запроса
   *
   * @return {Promise<T>}
   */
  protected async patch<T>(
    url: string,
    headers: Record<string, string> = {},
    body?: string | undefined
  ): Promise<T> {
    return await this._request(url, "PATCH", headers, body);
  }

  /**
   * Делает DELETE запрос и парсит ответ
   * @template T
   *
   * @param {string} url URL запроса
   * @param {Record<string, string>=} headers Заголовки запроса
   * @param {string=} body Тело запроса
   *
   * @return {Promise<T>}
   */
  protected async delete<T>(
    url: string,
    headers: Record<string, string> = {},
    body?: string | undefined
  ): Promise<T> {
    return await this._request(url, "DELETE", headers, body);
  }
}
