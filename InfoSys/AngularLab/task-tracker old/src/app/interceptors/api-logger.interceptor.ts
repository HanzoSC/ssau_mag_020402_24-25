import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const apiLoggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('HTTP Request:', req);

  return next(req).pipe(
    tap({
      next: (event) => {
        console.log('HTTP Response:', event);
      },
      error: (error) => {
        console.error('HTTP Error:', error);
      }
    })
  );
};