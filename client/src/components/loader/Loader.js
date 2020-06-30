import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { usePromiseTracker } from 'react-promise-tracker';

export default function LoadingPage() {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress &&
    <div className="loader">
      <CircularProgress />
    </div>
  );
}
