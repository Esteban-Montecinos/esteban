"use client";
import { IconQrcode } from "@tabler/icons-react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function CopiarPortapapeles() {
  async function handleClick() {
    const image = await toast.promise(fetch(`${location.origin}/links-qr-code.png`).then(
      (res) => res.blob()
    ),
    {
      pending: 'Copiando Código QR 🤔',
      success: 'Código QR Copiado 🤩',
      error: 'Error al Copiar Código QR 🤯'
    })
    await navigator.clipboard.write([
      new ClipboardItem({ [image.type]: image }),
    ]);
    
  }
  return (
    <div>
      <button
        onClick={handleClick}
        type="button"
        aria-label="Copiar Código QR"
        title="Copiar Código QR"
        className="inline-flex items-center p-2 text-sm text-white transition-colors bg-black border border-black rounded-full dark:text-black dark:bg-white dark:border-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
      >
      <IconQrcode/>
      </button>
      <ToastContainer/>
    </div>
  );
}
