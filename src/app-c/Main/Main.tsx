import React from 'react';
import { CardView } from '../../generic-c/Card-view/CardView';
import { GridView } from '../../generic-c/Grid-view/GridView';

import './Main.css';
import Unsplash from '../Assets/images/unsplashbg.jpg';
import { Button } from '../../generic-c/Button/Button';

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        Print Factory
      </header>
      <div className="App-left">
        left
      </div>
      <div className="App-mid">
        <GridView>
          <CardView title='One' desc="Always number 1" img={ Unsplash }><Button label="Buy now" variant="primary"/><Button label="Add to cart" variant="secondary"/></CardView>
          <CardView title='Two' desc="Always number 2" img={ Unsplash }><Button label="Click Me" variant="primary"/></CardView>
          <CardView title='Three' desc="Always number 3" img={ Unsplash }><Button label="Click Me" variant="secondary"/></CardView>
          <CardView title='Four' desc="Always number 4" img={ Unsplash }><Button label="Click Me" variant="small"/></CardView>
        </GridView>
      </div>
      <div className="App-right">
        right
      </div>
      <div className="App-footer">
        footer
      </div>
    </div>
  );
}

export default Main;
