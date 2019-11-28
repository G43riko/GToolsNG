'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">gtools-ng documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/G43InputModule.html" data-type="entity-link">G43InputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-G43InputModule-a7eba91dd5800a09d8b5e1f11caf4553"' : 'data-target="#xs-components-links-module-G43InputModule-a7eba91dd5800a09d8b5e1f11caf4553"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-G43InputModule-a7eba91dd5800a09d8b5e1f11caf4553"' :
                                            'id="xs-components-links-module-G43InputModule-a7eba91dd5800a09d8b5e1f11caf4553"' }>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CoreInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoreInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CoreSelectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoreSelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/G43InputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">G43InputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NumberInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NumberInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-G43InputModule-a7eba91dd5800a09d8b5e1f11caf4553"' : 'data-target="#xs-directives-links-module-G43InputModule-a7eba91dd5800a09d8b5e1f11caf4553"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-G43InputModule-a7eba91dd5800a09d8b5e1f11caf4553"' :
                                        'id="xs-directives-links-module-G43InputModule-a7eba91dd5800a09d8b5e1f11caf4553"' }>
                                        <li class="link">
                                            <a href="directives/CoreSelectOptionDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoreSelectOptionDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/G43InputService.html" data-type="entity-link">G43InputService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});