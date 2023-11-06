import { CopyButton } from "./copy-button";

export function Pre({ children, raw, meta}) {
  return (
    <pre className="flex flex-col  !p-0 border divide-y rounded-md dark:divide-zinc-800 divide-zinc-400 dark:border-zinc-800 border-zinc-400">
      <div className="flex flex-row items-center justify-between px-4 py-2 text-sm bg-white dark:bg-black rounded-t-md dark:text-zinc-300 text-zinc-900">
        <p className="!m-0">{meta}</p>
        <CopyButton
          text={raw}
          className="p-1 text-black transition-transform rounded-lg dark:text-white dark:hover:bg-zinc-800 hover:bg-zinc-200"
        />
      </div>
      <div className="w-full px-4 py-2 overflow-auto text-base text-black break-all dark:text-white dark:bg-zinc-900 bg-zinc-300">{children}</div>
    </pre>
  );
}
