import React, { Component } from 'react';

interface INavItemProps {
    iconClass: string
    itemText: string
}

export default class NavigationItem extends Component<INavItemProps> {
    constructor(props: INavItemProps) {
        super(props);
    }

    render() {
        return (
            <li className="nav-item" >
                <a className="nav-link" data-bind="html: $data.html, css: { active: $data.name == $root.chosenTab().name , hidden:  $data.name == 'post' }, attr: {hidden: $data.name == 'post'}, click: $root.goToTab">
                    <i className={this.props.iconClass}></i>{this.props.itemText}
                </a>
            </li>
        );
    }
}