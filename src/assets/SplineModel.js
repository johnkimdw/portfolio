// import Spline from '@splinetool/react-spline';

// export default function Star() {
//   return (
//     // <Spline scene="https://prod.spline.design/5wuWXkBkBIy-DPEf/scene.splinecode" />
//     <Spline scene="https://prod.spline.design/4ZlX7NnsGFgaCh3K/scene.splinecode" />
//   );
// }


import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <Spline scene="https://prod.spline.design/4ZlX7NnsGFgaCh3K/scene.splinecode" />
      </Suspense>
    </div>
  );
}