import React, { Component } from 'react';
import NavigationItem from './NavigationItem';

export default class InfoCard extends Component {
    render() {
        return (
            // Left sidebar component
            <div className="sidebar sidebar-light bg-transparent sidebar-component sidebar-component-left wmin-300 border-0 shadow-0 sidebar-expand-md" data-bind="attr: {hidden: chosenTab().name == 'post'}">

                {/* Sidebar content */}
                <div className="sidebar-content">

                    {/* Navigation */}
                    <div className="card">
                        <div className="card-body bg-indigo-400 text-center card-img-top" style={{ backgroundImage: "url(global_assets/images/backgrounds/panel_bg.png)", backgroundSize: "contain"}}>
                            <div className="card-img-actions d-inline-block mb-3">
                                <img className="img-fluid rounded-circle" src="global_assets/images/my-pic.jpeg" width="170" height="170" alt=""></img>
                            </div>

                            <h6 className="font-weight-semibold mb-0">Sinan Topaloglu</h6>
                            <span className="d-block opacity-75">Software Developer</span>

                            <div className="list-icons list-icons-extended mt-3">
                                <a href="https://twitter.com/salimtopaloglu" target="_blank" className="list-icons-item text-white" data-popup="tooltip" title="" data-container="body" data-original-title="Twitter"><i className="icon-twitter"></i></a>
                                <a href="https://www.linkedin.com/in/sinantopaloglu" target="_blank" className="list-icons-item text-white" data-popup="tooltip" title="" data-container="body" data-original-title="LinkedIn"><i className="icon-linkedin"></i></a>
                                <a href="https://github.com/sinantplgl" target="_blank" className="list-icons-item text-white" data-popup="tooltip" title="" data-container="body" data-original-title="Github"><i className="icon-github"></i></a>
                            </div>
                        </div>

                        <div className="card-body p-0">
                            <ul className="nav nav-sidebar mb-2" data-bind="foreach: tabs">
                                <NavigationItem iconClass="icon-quill4" itemText="Blog"/>
                                <NavigationItem iconClass="icon-user" itemText="About Me"/>
                            </ul>
                        </div>
                    </div>
                    {/* /navigation */}

                </div>
                {/* /sidebar content */}

            </div>
            // /left sidebar Component
        );
    }
}