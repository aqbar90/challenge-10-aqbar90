type AuthHeaderProps = {
  title: string;
  description: string;
};

export function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <div className='space-y-1'>
      <h1 className='text-display-sm font-extrabold text-foreground  font-sans leading-display-sm'>
        {title}
      </h1>

      <p className='text-md font-medium font-sans  text-foreground leading-md tracking-tight'>
        {description}
      </p>
    </div>
  );
}
