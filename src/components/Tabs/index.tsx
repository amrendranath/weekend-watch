import "./tabs.css";

interface TabsProps {
  tabs: string[];
  selected: number;
  onClick: (tabValue: number) => void;
}

const Tabs = (props: TabsProps) => {
  const { tabs, selected, onClick } = props;

  const handleClick = (event: any) => onClick(event.target.dataset.index);

  return (
    <>
      <nav className="tabs">
        <div className="selector" />
        <ul onClick={handleClick}>
          {tabs.map((tab, index) => (
            <li className={+selected === index ? "active" : ""} data-index={index} key={tab}>
              {tab}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Tabs;
