import { Observable } from 'rxjs';

export interface IGrpcService {
  accumulate(numberArray: INumberArray): Observable<any>;
  Search(query: IQuery): Observable<any>;
}

interface INumberArray {
  data: number[];
}
interface IQuery {
  query: string;
}
