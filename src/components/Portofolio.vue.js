import { ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const isActive = ref(true);
const toggleClass = (show) => {
    isActive.value = !isActive.value;
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.toggleClass) }, ...{ class: ("w-full h-full justify-center") }, ...{ class: (({ 'row-c ': __VLS_ctx.isActive, 'row-c': !__VLS_ctx.isActive })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (({ 'column-c ': __VLS_ctx.isActive, 'column-d': !__VLS_ctx.isActive })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/por/po (1).webp"), ...{ class: ("lazy-img") }, loading: ("lazy"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/por/po (2).webp"), ...{ class: ("lazy-img") }, loading: ("lazy"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/por/po (3).webp"), ...{ class: ("lazy-img") }, loading: ("lazy"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/por/po (4).webp"), ...{ class: ("lazy-img") }, loading: ("lazy"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/por/po (5).webp"), ...{ class: ("lazy-img") }, loading: ("lazy"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/por/po (6).webp"), ...{ class: ("lazy-img") }, loading: ("lazy"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/por/po (7).webp"), ...{ class: ("lazy-img") }, loading: ("lazy"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (({ 'column-c ': __VLS_ctx.isActive, 'column-d': !__VLS_ctx.isActive })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/por/po (8).webp"), ...{ class: ("lazy-img") }, loading: ("lazy"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/por/po (9).webp"), ...{ class: ("lazy-img") }, loading: ("lazy"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/por/po (10).webp"), ...{ class: ("lazy-img") }, loading: ("lazy"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/por/po (11).webp"), ...{ class: ("lazy-img") }, loading: ("lazy"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/por/po (12).webp"), ...{ class: ("lazy-img") }, loading: ("lazy"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/por/po (13).webp"), ...{ class: ("lazy-img") }, loading: ("lazy"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/por/po (14).webp"), ...{ class: ("lazy-img") }, loading: ("lazy"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/por/po (15).webp"), ...{ class: ("lazy-img") }, loading: ("lazy"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/por/po (16).webp"), ...{ class: ("lazy-img") }, loading: ("lazy"), });
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['row-c'];
    __VLS_styleScopedClasses['row-c'];
    __VLS_styleScopedClasses['column-c'];
    __VLS_styleScopedClasses['column-d'];
    __VLS_styleScopedClasses['lazy-img'];
    __VLS_styleScopedClasses['lazy-img'];
    __VLS_styleScopedClasses['lazy-img'];
    __VLS_styleScopedClasses['lazy-img'];
    __VLS_styleScopedClasses['lazy-img'];
    __VLS_styleScopedClasses['lazy-img'];
    __VLS_styleScopedClasses['lazy-img'];
    __VLS_styleScopedClasses['column-c'];
    __VLS_styleScopedClasses['column-d'];
    __VLS_styleScopedClasses['lazy-img'];
    __VLS_styleScopedClasses['lazy-img'];
    __VLS_styleScopedClasses['lazy-img'];
    __VLS_styleScopedClasses['lazy-img'];
    __VLS_styleScopedClasses['lazy-img'];
    __VLS_styleScopedClasses['lazy-img'];
    __VLS_styleScopedClasses['lazy-img'];
    __VLS_styleScopedClasses['lazy-img'];
    __VLS_styleScopedClasses['lazy-img'];
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
            isActive: isActive,
            toggleClass: toggleClass,
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
