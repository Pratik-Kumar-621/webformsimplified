import { Button } from "@/components/ui/button";

interface buttonProps {
  value: string;
  handleClick?: () => void | Promise<void>;
  cn?: string;
}

const SecondaryButton = (props: buttonProps) => {
  return (
    <Button
      variant="default"
      className={`h-9 w-24 cursor-pointer rounded-md bg-(--foreground) px-5 text-[14px] font-bold text-white transition-all duration-300 ease-in-out hover:bg-slate-700 dark:text-(--background) dark:hover:bg-slate-200 ${props.cn}`}
      onClick={props.handleClick}
    >
      {props.value}
    </Button>
  );
};

export default SecondaryButton;
