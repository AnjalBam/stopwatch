type ShortcutItemProps = {
  keyboardKey: string;
  keyDesc: string;
  onClick: () => {};
};

export default function ShortcutActions({
  getTimerState,
  pause,
  resume,
  reset,
  toggleFullScreen,
}: any) {
  const shortcuts: ShortcutItemProps[] = [
    {
      keyboardKey: "space",
      keyDesc: "Pause/Play timer.",
      onClick: getTimerState() === "PLAYING" ? pause : resume,
    },
    {
      keyboardKey: "R",
      keyDesc: "Reset timer.",
      onClick: reset,
    },
    {
      keyboardKey: "F",
      keyDesc: "Full screen",
      onClick: toggleFullScreen,
    },
  ];
  return (
    <div className="absolute bottom-0 left-0 right-0 pb-4 pt-2 px-2 flex flex-col items-center justify-center">
      <div className="text-sm text-zinc-500 flex flex-col gap-1">
        {shortcuts.map((shortcut) => (
          <p
            key={shortcut.keyboardKey}
            onClick={shortcut.onClick}
            className="cursor-pointer"
          >
            <KeyboardKey>{shortcut.keyboardKey}</KeyboardKey> -{" "}
            {shortcut.keyDesc}
          </p>
        ))}
      </div>
    </div>
  );
}

const KeyboardKey = ({ children }: { children: React.ReactNode }) => (
  <kbd className="border border-zinc-500 px-2 pb-0.5 rounded">{children}</kbd>
);
