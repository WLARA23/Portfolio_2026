import type { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({ label, error, className = '', id, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-dark">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={[
          'w-full rounded-xl border border-border bg-white px-4 py-3',
          'text-dark placeholder:text-body/50 text-sm resize-none',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
          'transition-all duration-200',
          error ? 'border-red-500' : '',
          className,
        ].join(' ')}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
