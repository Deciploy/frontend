import styles from './components.module.scss';

/* eslint-disable-next-line */
export interface ComponentsProps {}

export function Components(props: ComponentsProps) {
  return (
    <div className="bg-slate-500">
      <h1>Welcome to Components!</h1>
    </div>
  );
}

export default Components;
