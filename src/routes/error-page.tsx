
import {isRouteErrorResponse , useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const htmlContent = (
    <>
      <h1 className="text-slate-600 hover:cursor-not-allowed font-mono text-7xl">Oops!</h1>
      <p className="my-8 text-lg">Sorry, an unexpected error has occurred.</p>
    </>
  )

  if (isRouteErrorResponse(error)) {
    
    return (
        <div className="px-4 py-4 my-9 text-center ">
          {htmlContent}
          
          <p className="text-2xl font-bold text-stone-800">{error.status} {error.statusText}</p>
        </div>
    )
  }

  else{
      return (
      <div className="px-4 py-4 my-9 text-center">
        {htmlContent}
        <p>{"Unknown Error"}</p>
      </div>
    )
  }
  
}