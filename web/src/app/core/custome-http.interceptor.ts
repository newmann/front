/**
 * @Description: httpclient的拦截器，包括身份认证token、统一响应处理、异常处理
 * @Author: newmann
 * @Date: Created in 22:36 2018-01-22
 */
import {
  HttpHandler,
  HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent,
  HttpUserEvent
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CustomeHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    console.log('--------------注册http拦截器----------')
    const jwtReq = req.clone({
      headers: req.headers.set('token', 'asdf')
    });
    return next
      .handle(jwtReq)
      .mergeMap((event: any) => {
        if (event instanceof HttpResponse && event.body.code !== 0) {
          return Observable.create(observer => observer.error(event));
        }
        return Observable.create(observer => observer.next(event));
      })
      .catch((res: HttpResponse<any>) => {
        switch (res.status) {
          case 401:
            // 权限处理
            location.href = ''; // 重新登录
            break;
          case 200:
            // 业务层级错误处理
            console.log('错误代码为：' + res.body.code);
            break;
          case 404:
            console.log('404: API不存在');
            break;
        }
        // 以错误的形式结束本次请求
        return Observable.throw(res);
      })
  }
}

