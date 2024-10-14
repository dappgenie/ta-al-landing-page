import Link from 'next/link';

export const DocumentationLink = ({
  children,
  classValue,
}: {
  children?: React.ReactNode;
  classValue: string;
}) => {
  return (
    <Link
      href={'/Xnodes - Beyond Blockchain. Beyond Earnings.pdf'}
      target='_blank'
      rel='noopener noreferrer'
      className={classValue}
    >
      {children}
    </Link>
  );
};
