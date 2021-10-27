import * as React from 'react';
import { hot } from 'react-hot-loader/root';
interface Props {
  name: string;
}

const App = ({ name }: Props) => {
  React.useEffect(() => {
    fetch('/api')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <>
      <h1 className="text-4xl text-white bg-black">Hello {name}</h1>
    </>
  );
};

export default App;
