import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="container" style={{ lineHeight: '2rem' }}>
      <div id="error-page" className="center">
        <h1>Oops!</h1>
        <p style={{ color: '#FFF' }}>Sorry, an unexpected error has occurred.</p>
        <p style={{ color: '#FFF' }}>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}