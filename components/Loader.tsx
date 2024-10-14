import '../styles/loader.css';

export const Loader = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full z-90'>
      <div className='loader py-8'>
        <span>TA'AL</span>
        <span>TA'AL</span>
      </div>
      <div className='py-8 w-full max-w-[300px]'>
        <div className='loader-line' />
      </div>
    </div>
  );
};
