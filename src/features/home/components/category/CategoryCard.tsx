import Image from 'next/image';

type CategoryCardProps = {
  name: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
};

export function CategoryCard({
  name,
  icon,
  isActive,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      type='button'
      className='
        flex
        flex-col
        items-center
        justify-center
        gap-1
        lg:gap-1.5
      '
    >
      <div
        className={`
          flex
          h-25
          w-26.5
          items-center
          justify-center
          rounded-2xl
          bg-white
          shadow-[0px_0px_20px_rgba(203,202,202,0.25)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-lg
          lg:w-40.25
        
          ${
            isActive
              ? `
          border-2
          border-primary
          bg-red-50
          shadow-lg
        `
              : `
          bg-white
          shadow-[0px_0px_20px_rgba(203,202,202,0.25)]
        `
          }
  `}
      >
        <Image
          src={icon}
          alt={name}
          width={48}
          height={48}
          className='
            h-12
            w-12
            md:h-16.25
            md:w-16.25
          '
        />
      </div>

      <span
        className={`
          text-sm
          font-bold
          leading-sm
          tracking-tight
          text-foreground
          md:text-lg
          md:leading-lg
        
          ${isActive ? 'text-primary' : 'text-foreground'}
  `}
      >
        {name}
      </span>
    </button>
  );
}
