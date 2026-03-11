import { Button } from "@/components/ui/button";

interface buttonProps {
  value: string;
  handleClick?: () => void | Promise<void>;
  cn?: string;
}

const PrimaryButton = (props: buttonProps) => {
  return (
    <Button
      variant="default"
      className={`h-9 w-24 cursor-pointer rounded-md bg-(--button) px-5 text-[14px] font-bold text-white transition-all duration-300 ease-in-out hover:bg-(--button-hover) ${props.cn}`}
      onClick={props.handleClick}
    >
      {props.value}
    </Button>
  );
};

export default PrimaryButton;
