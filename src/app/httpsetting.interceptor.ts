import { HttpInterceptorFn } from '@angular/common/http';

export const HttpSettingInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    withCredentials: true
  });
  return next(authReq);
};
