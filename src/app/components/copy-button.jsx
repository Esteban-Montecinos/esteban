import { useState } from 'react'
import { IconClipboard, IconCheck } from '@tabler/icons-react'

export function CopyButton({ text, ...props }) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2500)
  }

  const Icon = isCopied ? IconCheck : IconClipboard

  return (
    <button
      disabled={isCopied}
      onClick={copy}
      aria-label='copiar al portapapeles'
      {...props}
    >
      <Icon className="w-5 h-5" />
    </button>
  )
}

