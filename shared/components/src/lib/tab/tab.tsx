import { FC, useState } from 'react';

interface TabItem {
  title: string;
  component: React.ReactNode;
}

interface TabProps {
  items: TabItem[];
}

export const TabView: FC<TabProps> = ({ items }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 ">
        <ul className="flex flex-wrap -mb-px">
          {items.map((item, index) =>
            selected === index ? (
              <li className="me-2">
                <a
                  onClick={() => setSelected(index)}
                  className="inline-block p-4 text-primary-600 border-b-2 cursor-pointer border-primary-600 rounded-t-lg active"
                  aria-current="page"
                >
                  {item.title}
                </a>
              </li>
            ) : (
              <li className="me-2" key={index}>
                <a
                  onClick={() => setSelected(index)}
                  className="inline-block p-4 border-b-2 cursor-pointer border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                >
                  {item.title}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
      {items[selected].component}
    </div>
  );
};
