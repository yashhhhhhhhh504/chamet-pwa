import * as React from 'react';

const TypingIndicator = React.forwardRef<HTMLDivElement>(({}, ref) => (
  <div className="flex flex-row gap-2" ref={ref}>
    <div className="h-2 w-2 animate-bounce rounded-full bg-accent"></div>
    <div className="h-2 w-2 animate-bounce rounded-full bg-accent [animation-delay:-.3s]"></div>
    <div className="h-2 w-2 animate-bounce rounded-full bg-accent [animation-delay:-.5s]"></div>
  </div>
));

export { TypingIndicator };
