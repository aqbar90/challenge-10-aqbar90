type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={`
        mx-auto
        py-6
        px-4
        md:px-30
        md:py-12
        ${className ?? ''}
      `}
    >
      {children}
    </div>
  );
}
