// import Spline from '@splinetool/react-spline';

// export default function Star() {
//   return (
//     // <Spline scene="https://prod.spline.design/5wuWXkBkBIy-DPEf/scene.splinecode" />
//     <Spline scene="https://prod.spline.design/4ZlX7NnsGFgaCh3K/scene.splinecode" />
//   );
// }


import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Star() {
  return (
    <div class="">
      <Suspense fallback={<div>Loading...</div>}>
      <Spline class="!w-0" scene="https://prod.spline.design/4ZlX7NnsGFgaCh3K/scene.splinecode" />
      </Suspense>
    </div>
  );
}