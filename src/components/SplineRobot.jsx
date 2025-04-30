import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

export default function SplineRobot() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    // 1) create the Spline application on the <canvas>
    const app = new Application(canvasRef.current);
    // 2) load your published .splinecode scene
    app.load(
      'https://prod.spline.design/robotfollowcursorforlandingpagemc-LmZhVZGia2BV1ISUc7ZdvFQ9/scene.splinecode'

    );
  }, []);
    
  return (
    <div className="relative w-full h-[600px] lg:h-[750px] overflow-hidden rounded-3xl shadow-2xl">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}




