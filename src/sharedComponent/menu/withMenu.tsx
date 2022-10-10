import React from "react";
import Menu from "./Menu";

const withMenu = (WrapperComponent: any, props: any) => {
  return class extends React.Component<any, any> {
    render() {
      return (
        <>
          <Menu/>
          <WrapperComponent {...props}/>
        </>
      )
    }
  }
}

export default withMenu;
