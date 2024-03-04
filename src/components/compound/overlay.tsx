import * as React from 'react';

type OverlayProps = {
  children: React.ReactNode;
};

const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>(
  ({ children }, ref) => (
    <div
      ref={ref}
      className="overlay fixed inset-0 z-[100] min-h-screen bg-black/10 backdrop-blur-[1px]">
      <div className="overlay-parent-container flex h-full w-full items-center justify-center">
        {children}
      </div>
    </div>
  )
);

export { Overlay };
