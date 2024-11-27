import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
import { watch } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const isBVisible = ref(true);
const router = useRouter();
const route = useRoute();
// Fungsi untuk scroll ke elemen berdasarkan ID
const scrollToSection = (event, sectionId) => {
    event.preventDefault(); // Mencegah tindakan default dari link
    const element = document.getElementById(sectionId);
    if (element) {
        // Scroll ke elemen dengan ID yang diberikan
        element.scrollIntoView({
            behavior: "smooth",
            block: "start", // Mengatur agar scroll menuju bagian atas elemen
        });
    }
    else {
        console.log("ppp");
    }
};
const toggleB = (show) => {
    isBVisible.value = show;
};
watch(() => route.path, (newPath) => {
    if (newPath === "/portofolio") {
        console.log("ll");
        isBVisible.value = false;
    }
});
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-6xl md:text-8xl font-bold z-20 fixed left-2 top-2 md:top-12 md:left-12") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, to: ("/#homeSection"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, to: ("/#homeSection"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (...[$event]) => {
            __VLS_ctx.scrollToSection($event, 'homeSection');
        }
    };
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleB(true);
            } }, ...{ class: ("") }, });
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-end z-20 fixed right-2 top-2 md:top-12 md:right-12") }, });
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onClick': {} }, to: ("/#homeSection"), }));
    const __VLS_10 = __VLS_9({ ...{ 'onClick': {} }, to: ("/#homeSection"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_14;
    const __VLS_15 = {
        onClick: (...[$event]) => {
            __VLS_ctx.scrollToSection($event, 'homeSection');
        }
    };
    let __VLS_11;
    let __VLS_12;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleB(true);
            } }, ...{ class: ("text-xl") }, });
    __VLS_nonNullable(__VLS_13.slots).default;
    var __VLS_13;
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    const __VLS_16 = __VLS_resolvedLocalAndGlobalComponents.transition;
    /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ] } */
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ name: ("fade"), }));
    const __VLS_18 = __VLS_17({ name: ("fade"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    if (__VLS_ctx.isBVisible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_22 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ ...{ 'onClick': {} }, to: ("/#priceSection"), }));
        const __VLS_24 = __VLS_23({ ...{ 'onClick': {} }, to: ("/#priceSection"), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
        let __VLS_28;
        const __VLS_29 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.isBVisible)))
                    return;
                __VLS_ctx.scrollToSection($event, 'priceSection');
            }
        };
        let __VLS_25;
        let __VLS_26;
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("text-xl") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
        __VLS_nonNullable(__VLS_27.slots).default;
        var __VLS_27;
        const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClick': {} }, to: ("/#doDontSection"), }));
        const __VLS_32 = __VLS_31({ ...{ 'onClick': {} }, to: ("/#doDontSection"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        let __VLS_36;
        const __VLS_37 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.isBVisible)))
                    return;
                __VLS_ctx.scrollToSection($event, 'doDontSection');
            }
        };
        let __VLS_33;
        let __VLS_34;
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("text-xl") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
        __VLS_nonNullable(__VLS_35.slots).default;
        var __VLS_35;
    }
    __VLS_nonNullable(__VLS_21.slots).default;
    var __VLS_21;
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ 'onClick': {} }, to: ("/portofolio"), ...{ class: ("text-xl") }, }));
    const __VLS_40 = __VLS_39({ ...{ 'onClick': {} }, to: ("/portofolio"), ...{ class: ("text-xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    let __VLS_44;
    const __VLS_45 = {
        onClick: (...[$event]) => {
            __VLS_ctx.toggleB(false);
        }
    };
    let __VLS_41;
    let __VLS_42;
    __VLS_nonNullable(__VLS_43.slots).default;
    var __VLS_43;
    __VLS_styleScopedClasses[''];
    __VLS_styleScopedClasses['text-6xl'];
    __VLS_styleScopedClasses['md:text-8xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['z-20'];
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['left-2'];
    __VLS_styleScopedClasses['top-2'];
    __VLS_styleScopedClasses['md:top-12'];
    __VLS_styleScopedClasses['md:left-12'];
    __VLS_styleScopedClasses['text-end'];
    __VLS_styleScopedClasses['z-20'];
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['right-2'];
    __VLS_styleScopedClasses['top-2'];
    __VLS_styleScopedClasses['md:top-12'];
    __VLS_styleScopedClasses['md:right-12'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['text-xl'];
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
            isBVisible: isBVisible,
            scrollToSection: scrollToSection,
            toggleB: toggleB,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
