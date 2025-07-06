import React from 'react';
import Home from './src/screens/Home';
import type {PropsWithChildren} from 'react';


type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): React.JSX.Element {
  return (
   <> 
      <Home></Home>
   </>
  );
}


export default App;
