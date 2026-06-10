type AuthHeaderProps = {
  title: string;
  description: string;
  variant?: 'desktop' | 'mobile';
};

export function AuthHeader({
  title,
  description,
  variant = 'desktop',
}: AuthHeaderProps) {
  const typography =
    variant === 'mobile'
      ? {
          title: 'text-display-xs leading-display-xs',
          description: 'text-sm leading-sm',
        }
      : {
          title: 'text-display-sm leading-display-sm',
          description: 'text-md leading-md',
        };

  return (
    <div className='space-y-1'>
      <h1
        className={`
          ${typography.title}
          font-extrabold
          font-sans
          text-foreground
        `}
      >
        {title}
      </h1>

      <p
        className={`
          ${typography.description}
          font-medium
          font-sans
          tracking-tight
          text-foreground
        `}
      >
        {description}
      </p>
    </div>
  );
}
