import { onMounted } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const config = {
    autoplay: 1600,
    wrapAround: true,
    pauseAutoplayOnHover: true,
    itemsToShow: 1.3,
    transition: 500,
};
const images = [
    new URL("../assets/h-3.webp", import.meta.url).href,
    new URL("../assets/h-2.webp", import.meta.url).href,
    new URL("../assets/h-1.webp", import.meta.url).href,
];
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full h-full flex justify-center items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-4xl md:text-6xl font-bold md:absolute z-10 h-full flex md:items-center ml-0 md:ml-[-140px] leading-snug") }, "data-aos": ("zoom-in-right"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("block md:hidden w-full text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hidden md:block") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Carousel;
    /** @type { [typeof __VLS_components.Carousel, typeof __VLS_components.Carousel, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...(__VLS_ctx.config), ...{ class: ("block md:hidden") }, }));
    const __VLS_2 = __VLS_1({ ...(__VLS_ctx.config), ...{ class: ("block md:hidden") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    for (const [image, index] of __VLS_getVForSourceType((__VLS_ctx.images))) {
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.Slide;
        /** @type { [typeof __VLS_components.Slide, typeof __VLS_components.Slide, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ key: ((index)), }));
        const __VLS_8 = __VLS_7({ key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((image)), ...{ class: ("w-[300px] h-[500px] object-cover border-2 border-slate-200") }, alt: ("Carousel Image"), });
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { addons: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.Navigation;
        /** @type { [typeof __VLS_components.Navigation, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
        const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    }
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-2xl hidden md:flex gap-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/h-3.webp"), ...{ class: ("w-[300px] h-[500px] object-cover img-1 border-2 border-slate-200") }, "data-aos": ("fade-right"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/h-2.webp"), ...{ class: ("w-[300px] h-[500px] object-cover img-2 border-2 border-slate-200") }, "data-aos": ("fade-down"), "data-aos-anchor-placement": ("bottom-bottom"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/h-1.webp"), ...{ class: ("w-[300px] h-[500px] object-cover img-3 border-2 border-slate-200") }, "data-aos": ("fade-left"), });
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['md:text-6xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['md:absolute'];
    __VLS_styleScopedClasses['z-10'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['md:items-center'];
    __VLS_styleScopedClasses['ml-0'];
    __VLS_styleScopedClasses['md:ml-[-140px]'];
    __VLS_styleScopedClasses['leading-snug'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['md:hidden'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['md:block'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['md:hidden'];
    __VLS_styleScopedClasses['w-[300px]'];
    __VLS_styleScopedClasses['h-[500px]'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['border-slate-200'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['md:flex'];
    __VLS_styleScopedClasses['gap-6'];
    __VLS_styleScopedClasses['w-[300px]'];
    __VLS_styleScopedClasses['h-[500px]'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['img-1'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['border-slate-200'];
    __VLS_styleScopedClasses['w-[300px]'];
    __VLS_styleScopedClasses['h-[500px]'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['img-2'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['border-slate-200'];
    __VLS_styleScopedClasses['w-[300px]'];
    __VLS_styleScopedClasses['h-[500px]'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['img-3'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['border-slate-200'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Carousel: Carousel,
            Slide: Slide,
            Navigation: Navigation,
            config: config,
            images: images,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
