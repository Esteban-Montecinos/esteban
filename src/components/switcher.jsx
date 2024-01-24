export default function Switcher({
  children,
}) {
  return (
    <div className={
      'flex divide-x divide-zinc-400 dark:divide-zinc-800 border rounded-[0.25rem] border-zinc-400 dark:border-zinc-800 overflow-hidden shadow-sm'}>
      {children}
    </div>
  );
};