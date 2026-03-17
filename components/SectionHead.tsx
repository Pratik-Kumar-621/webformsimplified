interface SectionHeadProps {
  title: string;
  description: string;
}
const SectionHead = ({ title, description }: SectionHeadProps) => {
  return (
    <div className="flex flex-col items-start gap-3 pb-6 md:pb-8 lg:items-center lg:pb-10">
      <h3 className="align-left lg:align-center text-3xl font-medium text-(--foreground)">
        {title}
      </h3>
      <p className="align-left lg:align-center font-light text-balance text-(--muted-foreground)">
        {description}
      </p>
    </div>
  );
};

export default SectionHead;
