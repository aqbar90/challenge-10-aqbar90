type PasswordRequirementsProps = {
  password: string;
};

export function PasswordRequirements({ password }: PasswordRequirementsProps) {
  const validations = [
    {
      label: 'At least 8 characters',
      valid: password.length >= 8,
    },
    {
      label: 'One uppercase letter',
      valid: /[A-Z]/.test(password),
    },
    {
      label: 'One lowercase letter',
      valid: /[a-z]/.test(password),
    },
    {
      label: 'One number',
      valid: /[0-9]/.test(password),
    },
    {
      label: 'One special character',
      valid: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ];

  return (
    <div className='space-y-1'>
      {validations.map((item) => (
        <p
          key={item.label}
          className={
            item.valid
              ? 'text-xs text-green-600'
              : 'text-xs text-muted-foreground'
          }
        >
          {item.valid ? '✓' : '•'} {item.label}
        </p>
      ))}
    </div>
  );
}
