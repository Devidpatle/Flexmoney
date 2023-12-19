import React from 'react';

const Result = ({ enrollmentResult }) => {
  return (
    <div>
      {enrollmentResult.success ? (
        <p>{enrollmentResult.message}</p>
      ) : (
        <div>
          <p>Error: {enrollmentResult.message}</p>
          {enrollmentResult.ageError && <p>Please make sure your age is between 18 and 65.</p>}
        </div>
      )}
    </div>
  );
};

export default Result;
