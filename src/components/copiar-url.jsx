"use client";
import { IconLink } from "@tabler/icons-react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function CopiarURL() {
  async function handleClick() {
       
    await toast.promise(navigator.clipboard.writeText(location.href),
    {
      pending: 'Copiando URL 🤔',
      success: 'URL copiada 🤩',
      error: 'Error al copiar URL 🤯'
    });
    
  }
  return (
    <div>
      <button
        onClick={handleClick}
        type="button"
        aria-label="Copiar URL"
        title="Copiar URL"
        className="inline-flex items-center p-2 text-sm text-white transition-colors bg-black border border-black rounded-full dark:text-black dark:bg-white dark:border-white hover:bg-transparent hover:text-black dark:hover:text-white"
      >
        <IconLink/>
      </button>
      <ToastContainer/>
    </div>
  );
}
