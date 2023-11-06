export default function Code({children, className}) {
  return (
    <code className={`${typeof children == 'string' ? 'p-1 rounded-md dark:text-white text-black dark:bg-zinc-900 bg-zinc-300': className}`}>{children}</code>
  )
}
