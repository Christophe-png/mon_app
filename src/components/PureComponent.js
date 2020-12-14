/**
 * @author Christophe CASTAN
 * Licence
 * Premier composant pure react
 */
import React from "react";
import "./PureComponent.css";

export function PureComponent() {
  return (
    <div>
      <h6 className="pure-h6">Pure composant</h6>
    </div>
  );
}

export function PureComponentProps({ label, age }) {
  return (
    <div>
      <h6 className="pureprops-h6">
        Pure props composant {label}
        {age}
      </h6>
    </div>
  );
}
