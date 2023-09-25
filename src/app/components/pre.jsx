import { CopyButton } from "./copy-button";

export function Pre({ children, raw, meta, ...props }) {
  return (
    <pre className="flex flex-col  !p-0 border divide-y rounded-md divide-zinc-700 border-zinc-700">
      <div className="flex flex-row items-center justify-between px-4 py-2 text-sm rounded-t-md text-zinc-400">
        <p className="!m-0">{meta}</p>
        <CopyButton
          text={raw}
          className="p-1 transition-transform rounded-lg hover:bg-zinc-700"
        />
      </div>
      <div className="w-full px-4 py-2 overflow-x-auto text-sm break-all bg-zinc-900">{children}</div>
    </pre>
  );
}
