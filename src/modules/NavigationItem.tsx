import React, { Component } from 'react';

interface INavItemProps {
    iconClass: string
    itemText: string
    isActive: boolean
}

export default class NavigationItem extends Component<INavItemProps> {
    constructor(props: INavItemProps) {
        super(props);
        debugger
    }

    render() {
        return (
            <li className="nav-item" >
                <a className={`nav-link ${this.props.isActive ? "active" : ""}`} data-bind="html: $data.html, css: { active: $data.name == $root.chosenTab().name , hidden:  $data.name == 'post' }, attr: {hidden: $data.name == 'post'}, click: $root.goToTab">
                    <i className={this.props.iconClass}></i>{this.props.itemText}
                </a>
            </li>
        );
    }
}