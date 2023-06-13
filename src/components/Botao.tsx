interface BotaoProps {
  cor?: "blue" | "green" | "gray";
  className?: string;
  children: any;
  onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    return (
    <button onClick={props.onClick}
      className={` bg-gradient-to-r from-${props.cor}-400 to-${props.cor}-800 text-white px-4 py-2 rounded-md ${props.className}`}
    >
      {props.children}
    </button>
  );
}
