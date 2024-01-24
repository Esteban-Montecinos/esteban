export default function SwitcherItem({ icon, onClick, active }) {
  const className = `py-0.5 px-1.5
    cursor-pointer
    hover:bg-zinc-300 active:bg-zinc-100 active:text-zinc-400
    dark:hover:bg-zinc-900 dark:active:bg-zinc-900/75 dark:active:text-zinc-600
    ${
      active ? "text-black dark:text-white" : "text-zinc-400 dark:text-zinc-700"
    }`;

  return (
    <div {...{ onClick, className }}>
      {
        <div className="w-[28px] h-[24px] flex items-center justify-center">
          {icon}
        </div>
      }
    </div>
  );
}
