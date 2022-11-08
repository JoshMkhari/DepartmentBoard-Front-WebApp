import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {catchError, throwError} from "rxjs";
import {ErrorComponent} from "./error/error.component";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

  constructor(private dialog: MatDialog) {}

  intercept(req: HttpRequest<any>, next: HttpHandler){
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse)=>{
        let errorMessage = "An Unknown Error has occurred ";
        if (error.error.message)
        {
          errorMessage = error.error.message;
        }
        //https://stackoverflow.com/questions/27770484/typescript-correct-way-to-do-string-equality
        if(errorMessage === "Invalid token")
        {
          //https://stackoverflow.com/questions/34338440/how-to-redirect-to-an-external-url-in-angular2
          window.location.href = 'login';
        }else
        {
          this.dialog.open(ErrorComponent, {data:{message:errorMessage}});
        }
        return throwError(error);
      })
    );
  }
}
