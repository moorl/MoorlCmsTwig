const {Component, Application, Mixin} = Shopware;
import template from './index.html.twig';
import './index.scss';

Component.register('sw-cms-el-moorl-twig', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
        mediaUrl() {
            const context = Shopware.Context.api;
            const elemData = this.element.data.media;
            if (elemData && elemData.id) {
                return this.element.data.media.url;
            }
            if (elemData && elemData.url) {
                return `${context.assetsPath}${elemData.url}`;
            }
            return `${context.assetsPath}/administration/static/img/cms/preview_mountain_large.jpg`;
        },
        elementCss() {
            return {
                'height': this.element.config.height.value
            }
        },
        frontCss() {
            if (this.element.config.typeFront.value == 'image') {
                return {
                    'background-image': 'url(' + this.mediaUrl + ')',
                }
            }
        },
        overlayCss() {
            return {
                'align-items': this.element.config.boxVerticalAlign.value,
                'justify-content': this.element.config.boxHorizontalAlign.value,
                'min-height': this.element.config.height.value,
                'height': this.element.config.height.value,
                'background': this.element.config.elementBackground.value
            }
        },
        boxCss() {
            return {
                'margin': this.element.config.boxMargin.value,
                'padding': this.element.config.boxPadding.value,
                'background': this.element.config.boxBackground.value,
                'color': this.element.config.boxColor.value,
                'width': this.element.config.boxWidth.value,
                'height': this.element.config.boxHeight.value,
                'text-align': this.element.config.boxTextAlign.value
            }
        },
        iconCss() {
            return {
                'font-size': this.element.config.iconFontSize.value,
                'margin-right': this.element.config.iconMarginRight.value
            }
        },
        boxClass() {
            if (!this.element.config.boxMaxWidth.value) {
                return ['reset'];
            } else {
                return null;
            }
        }
    },

    watch: {
        cmsPageState: {
            deep: true,
            handler() {
                this.$forceUpdate();
            }
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('moorl-twig');
            this.initElementData('moorl-twig');
        }
    }
});
