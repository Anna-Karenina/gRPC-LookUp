import { Observable } from 'rxjs';

export interface IGrpcService {
  search(query: IQuery): Observable<any>;
}

interface IQuery {
  query: string;
}
