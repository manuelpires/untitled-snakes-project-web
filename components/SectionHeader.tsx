interface Props {
  title: string;
}

const SectionHeader = ({ title }: Props) => (
  <header className="mb-10">
    <h2 className="m-0 text-6xl md:text-7xl bg-gradient-160 from-sky-500 to-green-500 w-fit bg-clip-text text-transparent">
      {title}
    </h2>
  </header>
);

export default SectionHeader;
