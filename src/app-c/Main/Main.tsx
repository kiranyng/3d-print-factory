import { CardView } from '../../generic-c/Card-view/CardView';
import { GridView } from '../../generic-c/Grid-view/GridView';

import Unsplash from '../Assets/images/unsplashbg.jpg';
import { Button } from '../../generic-c/Button/Button';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '../theme';
import { StyledContainer, StyledFooter, StyledHeader, StyledLeftBar, StyledMidContent, StyledRightBar } from './Main.styles';
import { MouseEventHandler, useState } from 'react';
import { TabView } from '../../generic-c/Tab-view/TabView';
import { ListView } from '../../generic-c/List-view/ListView';

function Main() {
  const [theme, setTheme] = useState( darkTheme );

  const clickHandler: MouseEventHandler = ( ev ) => {
    console.log("theme changed!");

    setTheme( theme.name === 'Dark' ? lightTheme : darkTheme );
  }

  const listData = {
    list: [
      {
        id: '123',
        component: <CardView title='123' desc="Always number 123" height={ 120 }>
        </CardView>,
        leftChildren: <Button label="Add to cart" variant="outline"/>,
        rightChildren: <Button label="Buy now" variant="outline"/>
      }, {
        id: '456',
        title: 'I am a list item title',
        description: 'I am list item description',
        leftChildren: <Button label="Add to cart" variant="outline"/>,
        rightChildren: <Button label="Buy now" variant="outline"/>
      },
      {
        id: '789',
        component: <CardView title='789' desc="Always number 789" height={ 120 } img={ Unsplash } rounded/>
      }
    ],
    selectable: true
  }

  const tabViewData = {
    tabs: [{
      key: '123',
      title: 'T-123',
      component: <CardView title='123' desc="Always number 123" height={ 120 }/>
    }, {
      key: '456',
      title: 'T-456',
      component: <div>456</div>
    }, {
      key: '789',
      title: 'Grid view',
      component: <GridView>
        <CardView rounded title='One' desc="Always number 1" img={ Unsplash } height={ 120 }><Button label="Buy now" variant="outline" rounded/><Button label="Add to cart" variant="filled" rounded/></CardView>
        <CardView rounded title='Two' desc="Always number 2" img={ Unsplash } height={ 120 }>
          <Button label="Click Me" variant="outline"/>
        </CardView>
        <CardView title='Three' desc="Always number 3" img={ Unsplash } height={ 120 }>
          <Button label="Click Me" variant="filled"/>
        </CardView>
        <CardView title='Four' desc="Always number 4" img={ Unsplash } height={ 120 } onClick={ clickHandler }>
          <Button label="Click Me" variant="filled"/>
        </CardView>
      </GridView>
    }, {
      key: 'list',
      title: 'List',
      component: <ListView { ...listData } />
    }]
  }

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles/>
      <StyledContainer>
        <StyledHeader>
          Print Plant
        </StyledHeader>
        <StyledLeftBar>
          left
        </StyledLeftBar>
        <StyledMidContent>
          <TabView { ...tabViewData }/>
        </StyledMidContent>
        <StyledRightBar>
          right
        </StyledRightBar>
        <StyledFooter>
          footer
        </StyledFooter>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default Main;
