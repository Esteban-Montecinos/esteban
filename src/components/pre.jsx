import { CopyButton } from "./copy-button";

export function Pre({ children, raw, meta}) {
  return (
    <pre className="flex flex-col  !p-0 border divide-y rounded-md divide-zinc-800 border-zinc-800">
      <div className="flex flex-row items-center justify-between px-4 py-2 text-sm bg-black rounded-t-md text-zinc-300">
        <p className="!m-0">{meta}</p>
        <CopyButton
          text={raw}
          className="p-1 transition-transform rounded-lg hover:bg-zinc-800"
        />
      </div>
      <div className="w-full px-4 py-2 overflow-auto text-base text-white break-all bg-zinc-900">{children}</div>
    </pre>
  );
}
