/** The shell prompt prefix shown before a command, e.g. `visitor@portfolio:~$`. */
export function Prompt({ text }: { text: string }) {
  return (
    <span className="mr-2 select-none text-sky-400/90" aria-hidden="true">
      {text}
    </span>
  );
}
