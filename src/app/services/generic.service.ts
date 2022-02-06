
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
//import { UtilUi } from '../../util/util-ui';

/**
 * Prepara um objeto para uma pesquisa get com parâmetros
 */
export const objToHttpParams = (obj: any): HttpParams => {
  let params = new HttpParams();
  for (const k in obj) {
    if (obj[k] !== null) {
      params = params.append(k, obj[k]);
    }
  }
  return params;
};

/**
 * Result para uma consulta paginada
 */
export class PageResult {
  public currentPage = 0;
  public totalElements = 0;
  public totalPages = 0;
  public size = 10;
  public content: Array<any> = [];

  public reload(): void {
    this.currentPage = 0;
    this.totalElements = 0;
    this.totalPages = 0;
    this.content = [];
  }
}

/**
 * Result para uma consulta paginada
 */
export class SearchParams {
  public page: number;
  public size: number;
  public sorting: { [key: string]: string } = {};
  public filters: { [key: string]: any } = {};

  public reloadPage(): void {
    this.page = 0;
  }
}

/**
 * @author Felipe Leonhardt
 * http://www.vision-ti.com.br
 */
export abstract class GenericService {

  public pageResult = new PageResult();

  URLAPI = environment.apiUrl;

  constructor(private _http: HttpClient,
              protected baseUrl: string) {
  }

  /**
   * post
   */
  public post(param: Object, url: string = ''): Observable<any> {
    return this._http.post<any>(`${this.URLAPI}${this.baseUrl}/${url}`, param);
  }

  /**
   * retorna apenas um objeto pela cliente-api
   * @param id - asdasd
   * @returns - {Observable<R>}
   */
  public findOne(id: number): Observable<any> {
    return this.get({url: 'findOne/' + id});
  }

  /**
   * get
   */
  public get(config: { url?: string, params?: Object } = {url: '', params: undefined}): Observable<any> {
    if (config.params) {
      return this._http.get<any>(`${this.URLAPI}${this.baseUrl}/${config.url}`, {params: objToHttpParams(config.params)});
    } else {
      return this._http.get<any>(`${this.URLAPI}${this.baseUrl}/${config.url}`);
    }
  }


  /**
   * delete
   */
  public delete(id: number): Observable<any> {
    return this._http.delete<any>(`${this.URLAPI}${this.baseUrl}/${id}`);
  }


  /**
   * put
   */
  public put(config: { url?: string, params?: Object, body?: Object } = {
    url: '',
    params: undefined,
    body: undefined
  }): Observable<any> {
    if (config.params) {
      return this._http.put<any>(`${this.URLAPI}${this.baseUrl}/${config.url}`, config.body, {params: objToHttpParams(config.params)});
    } else {
      return this._http.put<any>(`${this.URLAPI}${this.baseUrl}/${config.url}`, config.body);
    }
  }

  postWithFile(url: string, postData: any, multiPartFile: { param: string, file: File }[]) {
    const formData: FormData = new FormData();
    if (multiPartFile) {
      multiPartFile.forEach((item) => {
        if (item.file) {
          formData.append(item.param, item.file, item.file ? item.file.name : null);
        }
      });

    }

    if (postData) {
      for (const property in postData) {
        if (postData.hasOwnProperty(property)) {
          formData.append(property, JSON.stringify(postData[property]));
        }
      }
    }
    return this._http.post<any>(`${this.URLAPI}${this.baseUrl}/${url}`, formData);

  }


  /**
   * Método generico pra criar um objeto ou salvar um existente, no backend
   * @param - obj
   * @returns - {Observable<R>}
   */
  public save(obj: any): Observable<any> {
    return this.post(obj, 'save');
  }


 /* public findAllPaged(method: string, tableEvent?: any, filtros?: any): Observable<any> {
    const search = 
    //UtilUi.getPageableRequest(tableEvent);
    delete search.filters;
    for (const k in filtros) {
      if (filtros.hasOwnProperty(k)) {
        search[k] = filtros[k];
      }
    }
    return this.post(search, method);

  }*/


}
