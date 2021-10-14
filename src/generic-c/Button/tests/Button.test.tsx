import * as ReactDom from 'react-dom';

import { Button } from "../Button";

it("Button component", () => {
    let rootEl: HTMLDivElement;

    beforeEach( () => {
        rootEl = document.createElement('div');
        document.body.appendChild( rootEl );

        ReactDom.render( <Button label="Hello"/>, rootEl );
    } );

    afterEach( () => {
        document.removeChild( rootEl );
        rootEl.remove();
    } );

    describe("creation works", () => {
        
    });
});