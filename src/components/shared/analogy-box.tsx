interface AnalogyBoxProps {
  children: React.ReactNode;
}

export function AnalogyBox({ children }: AnalogyBoxProps) {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-sage-50 border-l-4 border-pink-400 rounded-r-xl py-4 px-5 my-4">
      <div className="text-[0.72rem] font-bold uppercase tracking-widest text-pink-500 mb-1.5">
        Think of it this way
      </div>
      <div className="text-foreground leading-relaxed">{children}</div>
    </div>
  );
}
