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
                                <a href="modules/G43CommonModule.html" data-type="entity-link">G43CommonModule</a>
                            </li>
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
                            <li class="link">
                                <a href="modules/G43SharedPipesModule.html" data-type="entity-link">G43SharedPipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-G43SharedPipesModule-6022e2f270cf66e00489456ec630bfed"' : 'data-target="#xs-pipes-links-module-G43SharedPipesModule-6022e2f270cf66e00489456ec630bfed"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-G43SharedPipesModule-6022e2f270cf66e00489456ec630bfed"' :
                                            'id="xs-pipes-links-module-G43SharedPipesModule-6022e2f270cf66e00489456ec630bfed"' }>
                                            <li class="link">
                                                <a href="pipes/G43FileSizePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">G43FileSizePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/G43SafePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">G43SafePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/G43TestingModule.html" data-type="entity-link">G43TestingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MenuModule.html" data-type="entity-link">MenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MenuModule-b7e8e62a4fc43157ad889a1165d38df9"' : 'data-target="#xs-components-links-module-MenuModule-b7e8e62a4fc43157ad889a1165d38df9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuModule-b7e8e62a4fc43157ad889a1165d38df9"' :
                                            'id="xs-components-links-module-MenuModule-b7e8e62a4fc43157ad889a1165d38df9"' }>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuDrawerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuDrawerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuTopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuTopComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TableMakerModule.html" data-type="entity-link">TableMakerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TableMakerModule-433b60d711e9925729854a8e11ee1c11"' : 'data-target="#xs-components-links-module-TableMakerModule-433b60d711e9925729854a8e11ee1c11"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TableMakerModule-433b60d711e9925729854a8e11ee1c11"' :
                                            'id="xs-components-links-module-TableMakerModule-433b60d711e9925729854a8e11ee1c11"' }>
                                            <li class="link">
                                                <a href="components/CoreTableColumnComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoreTableColumnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CoreTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoreTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CoreTableFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoreTableFilterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/FilterModel.html" data-type="entity-link">FilterModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/G43CoreService.html" data-type="entity-link">G43CoreService</a>
                            </li>
                            <li class="link">
                                <a href="classes/G43RestApiHandler.html" data-type="entity-link">G43RestApiHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/G43Service.html" data-type="entity-link">G43Service</a>
                            </li>
                            <li class="link">
                                <a href="classes/MenuItem.html" data-type="entity-link">MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableMaker.html" data-type="entity-link">TableMaker</a>
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
                                    <a href="injectables/CoreTableService.html" data-type="entity-link">CoreTableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/G43InputService.html" data-type="entity-link">G43InputService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableService.html" data-type="entity-link">TableService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/G43Notification.html" data-type="entity-link">G43Notification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/G43ServiceParams.html" data-type="entity-link">G43ServiceParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/G43Translation.html" data-type="entity-link">G43Translation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableColumnConfigInterface.html" data-type="entity-link">TableColumnConfigInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableConfigInterface.html" data-type="entity-link">TableConfigInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableFilterConfigInterface.html" data-type="entity-link">TableFilterConfigInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
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