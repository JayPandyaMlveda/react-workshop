import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Todo from "./Components/Todo";
function App() {
  return (
    <div>
      <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
        <Suspense
          fallback={
            <div
              style={{ width: "100vw", height: "100vh" }}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="spinner-border" role="status" />
            </div>
          }
        >
          <Todo />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
