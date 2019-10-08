/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface IntSelect {
    'name': string;
    'placeholder': string;
    'value': any;
  }
  interface IntSelectItem {
    'value': any;
  }
}

declare global {


  interface HTMLIntSelectElement extends Components.IntSelect, HTMLStencilElement {}
  var HTMLIntSelectElement: {
    prototype: HTMLIntSelectElement;
    new (): HTMLIntSelectElement;
  };

  interface HTMLIntSelectItemElement extends Components.IntSelectItem, HTMLStencilElement {}
  var HTMLIntSelectItemElement: {
    prototype: HTMLIntSelectItemElement;
    new (): HTMLIntSelectItemElement;
  };
  interface HTMLElementTagNameMap {
    'int-select': HTMLIntSelectElement;
    'int-select-item': HTMLIntSelectItemElement;
  }
}

declare namespace LocalJSX {
  interface IntSelect {
    'name'?: string;
    'onDidChange'?: (event: CustomEvent<any>) => void;
    'placeholder'?: string;
    'value'?: any;
  }
  interface IntSelectItem {
    'onSelected'?: (event: CustomEvent<any>) => void;
    'value'?: any;
  }

  interface IntrinsicElements {
    'int-select': IntSelect;
    'int-select-item': IntSelectItem;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'int-select': LocalJSX.IntSelect & JSXBase.HTMLAttributes<HTMLIntSelectElement>;
      'int-select-item': LocalJSX.IntSelectItem & JSXBase.HTMLAttributes<HTMLIntSelectItemElement>;
    }
  }
}


